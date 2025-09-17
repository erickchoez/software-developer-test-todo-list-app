FROM php:8.2-fpm-alpine
RUN apk add --no-cache bash git openssh jq libzip-dev oniguruma-dev zip unzip icu-dev postgresql-dev autoconf gcc g++ make curl
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath intl zip
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
COPY . /var/www/html
RUN chmod +x /var/www/html/docker-entrypoint.sh || true
RUN composer install --no-interaction --optimize-autoloader || true
EXPOSE 8000
ENTRYPOINT ["/var/www/html/docker-entrypoint.sh"]
CMD ["php","artisan","serve","--host=0.0.0.0","--port=8000","--no-reload"]
