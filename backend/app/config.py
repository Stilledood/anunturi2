# app/config.py
from pydantic_settings import BaseSettings
from pathlib import Path
from typing import Optional

class Settings(BaseSettings):
    DATABASE_URL: str
    JWT_SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    STRIPE_SECRET_KEY: Optional[str] = None

    class Config:
        env_file = Path(__file__).resolve().parent.parent / ".env"

settings = Settings()
