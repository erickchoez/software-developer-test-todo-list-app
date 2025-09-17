# Backend (Laravel)

## Setup local (sin Docker)
- Copia `.env.example` a `.env` y configura la conexión a Postgres
- Ejecuta `composer install`
- Genera la app key: `php artisan key:generate`
- Ejecuta migraciones: `php artisan migrate`

## Con Docker (recomendado)
- `docker-compose up --build -d`
- `docker-compose exec app bash`
- (si es necesario) `composer install`
- `php artisan key:generate`
- `php artisan migrate --seed`
