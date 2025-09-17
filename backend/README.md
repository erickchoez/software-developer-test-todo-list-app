# Backend (Laravel)

## Local Setup (without Docker)
- Copy `.env.example` to `.env` and configure the Postgres connection
- Run `composer install`
- Generate the app key: `php artisan key:generate`
- Run migrations: `php artisan migrate`

## With Docker (recommended)
- `docker-compose up --build -d`
- `docker-compose exec app bash`
- (if necessary) `composer install`
- `php artisan key:generate`
- `php artisan migrate --seed`
