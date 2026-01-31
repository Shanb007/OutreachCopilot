.PHONY: dev dev-frontend dev-backend setup setup-frontend setup-backend db-migrate db-upgrade test

BACKEND_PYTHON = backend/.venv/bin/python
BACKEND_UVICORN = backend/.venv/bin/uvicorn
BACKEND_ALEMBIC = backend/.venv/bin/alembic
BACKEND_PYTEST = backend/.venv/bin/pytest

# Run both frontend and backend concurrently
dev:
	@echo "Starting OutreachCopilot..."
	@make -j2 dev-frontend dev-backend

dev-frontend:
	cd frontend && pnpm dev

dev-backend:
	cd backend && .venv/bin/uvicorn app.main:app --reload --port 8000

# Install all dependencies
setup: setup-backend setup-frontend

setup-backend:
	cd backend && /opt/homebrew/bin/python3.13 -m venv .venv && .venv/bin/pip install -r requirements.txt

setup-frontend:
	cd frontend && pnpm install

# Database migrations
db-migrate:
	cd backend && .venv/bin/alembic revision --autogenerate -m "$(msg)"

db-upgrade:
	cd backend && .venv/bin/alembic upgrade head

# Testing
test:
	cd backend && .venv/bin/pytest
	cd frontend && pnpm test
