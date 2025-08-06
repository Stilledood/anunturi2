from fastapi import FastAPI
from app.config import settings

app = FastAPI()

@app.get("/")
def root():
    return {"db_url": settings.DATABASE_URL}
