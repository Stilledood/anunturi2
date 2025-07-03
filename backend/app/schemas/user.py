# app/schemas/user.py

from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    is_furnizor: bool = False

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    is_active: bool
    plan: str
    plan_expiration: Optional[datetime]
    created_at: datetime

    model_config = {
        "from_attributes": True
    }

