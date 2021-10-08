create user admin with password 'admin' superuser;
create database ytodo owner admin encoding 'UTF8';
grant all privileges on database ytodo to admin;

\c ytodo;
create schema ytodo;

