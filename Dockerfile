FROM nginx:alpine

COPY static/ /usr/share/nginx/html/
COPY config/default.conf /etc/nginx/conf.d/
COPY assets/ /usr/share/nginx/assets/
RUN mkdir /usr/share/nginx/assets/gallery

HEALTHCHECK CMD curl --fail http://localhost || exit 1