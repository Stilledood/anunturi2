from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from app.core.config import settings

conf = ConnectionConfig(
    MAIL_USERNAME = settings.MAIL_USERNAME,
    MAIL_PASSWORD = settings.MAIL_PASSWORD,
    MAIL_FROM = settings.MAIL_FROM,
    MAIL_FROM_NAME = settings.MAIL_FROM_NAME,
    MAIL_PORT = settings.MAIL_PORT,
    MAIL_SERVER = settings.MAIL_SERVER,
    MAIL_STARTTLS = settings.MAIL_STARTTLS,
    MAIL_SSL_TLS = settings.MAIL_SSL_TLS,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

async def send_verification_email(to_email: str, token: str):
    verification_link = f"http://localhost:3000/verificare-email?token={token}"
    html = f"""
    <h3>Confirmă adresa ta de email</h3>
    <p>Apasă pe linkul de mai jos pentru a confirma:</p>
    <a href="{verification_link}">Confirmă emailul</a>
    """

    message = MessageSchema(
        subject="Confirmare cont - Platforma Evenimente",
        recipients=[to_email],
        body=html,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    await fm.send_message(message)
