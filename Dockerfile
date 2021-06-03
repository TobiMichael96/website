FROM nginx:alpine

COPY static/ /usr/share/nginx/html/
COPY config/default.conf /etc/nginx/conf.d/
RUN mkdir -p /usr/share/nginx/assets/gallery

HEALTHCHECK CMD curl --fail http://localhost || exit 1