FROM nginx:alpine

COPY static/ /usr/share/nginx/html/
COPY config/default.conf /etc/nginx/conf.d/