FROM node:8.14.1-alpine

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /app/

EXPOSE 3000

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "run", "serve"]

