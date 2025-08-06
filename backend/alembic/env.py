import sys
from pathlib import Path

# 🧠 Setează calea către root-ul backend-ului (unde e 'app/')
BASE_DIR = Path(__file__).resolve().parents[1]
sys.path.append(str(BASE_DIR))
from alembic import context
from logging.config import fileConfig
from sqlalchemy import pool
from sqlalchemy.engine import Connection
from sqlalchemy.ext.asyncio import async_engine_from_config

from alembic import context
import os
from dotenv import load_dotenv

from app.models.tets_models import Base
# sau din database.py când ai toate modelele centralizate

env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=env_path)

# Alembic Config object
config = context.config

# Load values from .env
db_url = os.getenv("DATABASE_URL")

if db_url is None:
    raise ValueError("❌ DATABASE_URL nu a fost găsit în .env. Verifică dacă există și e scris corect.")

config.set_main_option("sqlalchemy.url", str(db_url))


# Interpret the config file for Python logging
fileConfig(config.config_file_name)

target_metadata = Base.metadata

def run_migrations_offline():
    context.configure(
        url=config.get_main_option("sqlalchemy.url"),
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

def do_run_migrations(connection: Connection):
    context.configure(connection=connection, target_metadata=target_metadata)

    with context.begin_transaction():
        context.run_migrations()

async def run_migrations_online():
    connectable = async_engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)

    await connectable.dispose()

if context.is_offline_mode():
    run_migrations_offline()
else:
    import asyncio
    asyncio.run(run_migrations_online())
