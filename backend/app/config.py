from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "OutreachCopilot"
    app_version: str = "0.1.0"
    debug: bool = False

    database_url: str = f"sqlite:///{Path(__file__).resolve().parent.parent / 'outreach_copilot.db'}"

    cors_origins: list[str] = ["http://localhost:3000"]

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
