FROM nginx:1.19

RUN mkdir /usr/share/nginx/app
 
COPY ./app /usr/share/nginx/app
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]