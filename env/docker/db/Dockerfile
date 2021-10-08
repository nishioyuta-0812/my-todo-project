FROM postgres:13.2-alpine
COPY data /docker-entrypoint-initdb.d/
ENV POSTGRES_HOST_AUTH_METHOD=trust
ENV POSTGRES_USER: admin
ENV POSTGRES_PASSWORD: admin