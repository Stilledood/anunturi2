# app/database.py

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from config import settings
from models.tets_models import Base

# Creăm engine-ul asincron pentru PostgreSQL
engine = create_async_engine(settings.DATABASE_URL, echo=True)

# Factory de sesiuni async
async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# Funcție de dependency pentru FastAPI (folosită în endpoints)
async def get_db():
    async with async_session() as session:
        yield session
