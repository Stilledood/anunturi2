# app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes_user import router as user_router  # 👈 import ruta user

app = FastAPI()

# CORS – pentru ca frontendul să poată accesa API-ul
origins = [
    "http://localhost:3000",  # frontend local
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # poți pune ["*"] pentru test
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint de test
@app.get("/api/ping")
async def ping():
    return {"message": "pong 🏓 from backend"}

# ✅ Include ruta pentru user
app.include_router(user_router, prefix="/api/users")
