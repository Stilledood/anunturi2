from fastapi_mail import ConnectionConfig
from app.core.config import settings

conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD,
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_FROM_NAME=settings.MAIL_FROM_NAME,
    MAIL_STARTTLS=True,      # înlocuiește MAIL_TLS
    MAIL_SSL_TLS=False,      # înlocuiește MAIL_SSL
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)
