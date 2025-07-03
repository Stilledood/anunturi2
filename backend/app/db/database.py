# app/db/database.py

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

# Creează engine-ul pentru PostgreSQL (folosește asyncpg)
engine = create_async_engine(settings.DATABASE_URL, echo=True)

# Creează sesiunea async
AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# Declarative base pentru modele
Base = declarative_base()

# Funcție pentru a obține sesiune în endpointuri
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
