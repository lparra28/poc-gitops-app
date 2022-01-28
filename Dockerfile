FROM public.ecr.aws/bitnami/node:latest
COPY server.js ./
EXPOSE 8082
CMD [ "node", "server.js" ]