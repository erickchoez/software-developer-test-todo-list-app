#!/bin/sh
set -e

# Install composer deps if vendor missing
if [ ! -d "vendor" ]; then
  composer install --no-interaction --optimize-autoloader
fi

# Generate app key if missing
if [ -z "$(php artisan key:generate --show 2>/dev/null)" ]; then
  php artisan key:generate
fi

# Run migrations and seed
php artisan migrate --force || true
php artisan db:seed --force || true

exec "$@"
