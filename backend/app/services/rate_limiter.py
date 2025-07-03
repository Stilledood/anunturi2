# app/services/rate_limiter.py

import redis.asyncio as redis
from fastapi import HTTPException, status

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

MAX_ATTEMPTS = 5
BLOCK_TIME = 60 * 15  # 15 minute

async def check_login_attempts(email: str):
    key = f"login_fail:{email}"
    attempts = await r.get(key)

    if attempts and int(attempts) >= MAX_ATTEMPTS:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Prea multe încercări de autentificare. Încearcă din nou mai târziu."
        )

async def register_failed_attempt(email: str):
    key = f"login_fail:{email}"
    current = await r.incr(key)
    if current == 1:
        await r.expire(key, BLOCK_TIME)

async def reset_login_attempts(email: str):
    key = f"login_fail:{email}"
    await r.delete(key)
