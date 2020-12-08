FROM nginx:alpine

COPY static/ /usr/share/nginx/html/
COPY config/default.conf /etc/nginx/conf.d/

HEALTHCHECK CMD curl --fail http://localhost || exit 1