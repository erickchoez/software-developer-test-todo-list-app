# fullstack-todo-laravel
Deliverable Project: ToDo List App - Backend (Laravel 12) + Frontend (React 18 + Vite) + PostgreSQL + Docker

## Summary
- Backend: Laravel 12 (PHP 8.x) + Sanctum + ramsey/uuid
- Frontend: React 18 + Vite + MUI
- DB: PostgreSQL 15
- Authentication: Laravel Sanctum (token-based)
- Migrations: Laravel migrations for `users` and `tasks`
- Dockers: `docker-compose.yml` with services `app` (PHP), `nginx`, `db`, `frontend`

---
## Repository Contents
- `/backend` — Laravel code (skeleton and key files: models, migrations, controllers, routes, Dockerfile, composer.json)
- `/frontend` — React + Vite (login system and task CRUD)
- `docker-compose.yml` — local orchestration
- `.env.example` — example variables for backend and frontend

---
## Default Variables Used
Backend `.env.example` (values ready for `docker-compose`):
```env
APP_NAME=FullstackTodo
APP_ENV=local
APP_KEY=base64:GENERATE_ME
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=todo_db
DB_USERNAME=postgres
DB_PASSWORD=postgres

SANCTUM_STATEFUL_DOMAINS=localhost
SESSION_DRIVER=cookie
```

Frontend `.env.example`:
```env
VITE_API_URL=http://localhost:8000/api
```

---
## Detailed Instructions to Launch Everything (Docker - Recommended)

**Requirements**: Docker and docker-compose installed on your machine.

1. Clone the repository and copy the example .env files:
   ```bash
   cp .env.example backend/.env
   cp .env.example frontend/.env
   ```
2. Build and start the containers:
   ```bash
   docker-compose up --build -d
   ```
3. Install backend dependencies (from a shell inside the `app` container) and generate APP_KEY:
   ```bash
   docker-compose exec app bash
   cd /var/www/html
   composer install --no-interaction --optimize-autoloader
   php artisan key:generate --ansi
   php artisan migrate --seed
   exit
   ```
   > Note: `php artisan migrate` will create the `users` and `tasks` tables.

4. Install frontend dependencies and start (if not using the `frontend` container):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. Access the application:
   - Frontend (Vite): http://localhost:3000 (according to docker-compose)
   - Laravel API: http://localhost:8000/api

---
## Main Endpoints (API)
- `POST /api/register` — Register (body: name, email, password, password_confirmation)
- `POST /api/login` — Login (body: email, password) -> returns token
- `POST /api/logout` — Logout (auth)
- `GET /api/tasks` — List tasks (auth) - query: ?status=&sortBy=order|due_date
- `POST /api/tasks` — Create task (auth)
- `GET /api/tasks/{uuid}` — Get task (auth)
- `PUT /api/tasks/{uuid}` — Update task (auth)
- `DELETE /api/tasks/{uuid}` — Delete task (auth)

---
## Technical Notes and Recommendations
- The migrations use `ramsey/uuid` to generate v4 `uuid` in the `uuid` column of tasks.
- Laravel Sanctum is configured for API tokens (stateless) and cookie-based auth for SPA if desired.
- If your environment does not allow building the containers, follow the manual steps in `backend/README.md` and `frontend/README.md`.