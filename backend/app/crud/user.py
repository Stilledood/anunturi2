# app/crud/user.py

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user import User
from app.schemas.user import UserCreate
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

async def get_user_by_email(db: AsyncSession, email: str):
    result = await db.execute(select(User).where(User.email == email))
    return result.scalars().first()

async def create_user(db: AsyncSession, user: UserCreate):
    hashed_pw = hash_password(user.password)
    db_user = User(
        email=user.email,
        hashed_password=hashed_pw,
        is_furnizor=user.is_furnizor
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user
