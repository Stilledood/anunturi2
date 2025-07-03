from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta

from app.db.database import get_db
from app.schemas.user import UserCreate, UserOut
from app.crud import user as crud_user
from app.models.user import User
from app.core.security import verify_password, create_access_token
from app.api.dependencies import get_current_user
from app.services.rate_limiter import check_login_attempts, register_failed_attempt, reset_login_attempts
from app.services.email import send_verification_email
from app.core.config import settings
from jose import jwt, JWTError

router = APIRouter(tags=["Users"])

# ✅ Înregistrare + email de confirmare
@router.post("/register", response_model=UserOut)
async def register(user: UserCreate, db: AsyncSession = Depends(get_db)):
    existing_user = await crud_user.get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email deja folosit."
        )

    new_user = await crud_user.create_user(db, user)  # is_verified=False implicit

    # ✅ Generăm token JWT pentru confirmare email
    token = create_access_token(data={"sub": str(new_user.id)}, expires_delta=timedelta(hours=1))
    await send_verification_email(new_user.email, token)

    return new_user

# ✅ Login cu blocare + verificare cont activ
@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    email = form_data.username

    await check_login_attempts(email)

    user = await crud_user.get_user_by_email(db, email)
    if not user or not verify_password(form_data.password, user.hashed_password):
        await register_failed_attempt(email)
        raise HTTPException(status_code=400, detail="Email sau parolă incorectă")

    if not user.is_verified:
        raise HTTPException(status_code=403, detail="Contul nu este verificat prin email.")

    await reset_login_attempts(email)

    access_token = create_access_token(
        data={"sub": user.email},
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    return {"access_token": access_token, "token_type": "bearer"}

# ✅ Rută protejată: userul curent
@router.get("/me", response_model=UserOut)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

# ✅ Verificare email (folosită din linkul trimis pe mail)
@router.get("/verify")
async def verify_email(token: str, db: AsyncSession = Depends(get_db)):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id = int(payload.get("sub"))
    except JWTError:
        raise HTTPException(status_code=400, detail="Token invalid sau expirat")

    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(status_code=404, detail="Utilizator inexistent")

    if user.is_verified:
        return {"message": "Emailul este deja confirmat."}

    user.is_verified = True
    await db.commit()
    await db.refresh(user)

    return {"message": "Email confirmat cu succes!"}


@router.post("/resend-verification")
async def resend_verification_email(email: str, db: AsyncSession = Depends(get_db)):
    user = await crud_user.get_user_by_email(db, email)

    if not user:
        raise HTTPException(status_code=404, detail="Utilizator inexistent")

    if user.is_verified:
        return {"message": "Emailul este deja confirmat."}

    token = create_access_token(data={"sub": str(user.id)}, expires_delta=timedelta(hours=1))
    await send_verification_email(user.email, token)

    return {"message": "Email de confirmare retrimis cu succes!"}
    #Asta e un comment



