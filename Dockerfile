FROM nginx

COPY . /usr/share/nginx/html
COPY ./assets/favicon/favicon.ico /usr/share/nginx/html
