FROM kytel0925/php:8.3-debian-apache

ENV HTTP_PORT=8080

COPY --chown=code:code . /app
