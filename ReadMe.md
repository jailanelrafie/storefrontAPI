# Storefront API Project

## Table of Contents
* Project Description
* Dependenices
* Scripts
* Database instructions
* Contents of .env file

### Project Description

This code implements the storefront api project, which is the second project of the EG-FWD Full Stack Web Development Advanced course - August Cohort.
The code creates a storefront api with a SQL database connection holding information about users, orders, and products. It is implemented using TypeScript and Node.js. Unit testing is implemented using Jasmine.

### Dependencies
* Express
* JsonWebToken
* Jasmine
* TypeScript
* bcrypt
* Body Parser
* db-migrate & db-migrate-pg
* dotenv
* Postgres
* Supertest

### Scripts
* Run: npm run build
* Before each test script: db-migrate db:drop storefront_test
* Test: npm run test

### Database instructions
To create the database in terminal:
* psql -U postgres
* enter password
* CREATE DATABASE storefront_data;

To create the database tables using db-migrate:
* Switch to project folder directory
* db-migrate create users-table --sql-file
* db-migrate create products-table --sql-file
* db-migrate create orders-table --sql-file
* db-migrate create orders-products-table --sql-file

Contents of up file for each table:

* Users:
CREATE TABLE users (
  user_name VARCHAR(100) NOT NULL,
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

* Products:
CREATE TABLE products (
  name VARCHAR(100),
  id SERIAL PRIMARY KEY,
  price INTEGER
);

* Orders:
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100) NOT NULL,
    user_id BIGINT REFERENCES users(id)
);

* Orders Products:
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity INT DEFAULT 1,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES products(id)
);

And finally, run the migrations:
* db-migrate up

### Contents of .env file
* NODE_ENV=dev

* POSTGRES_HOST=localhost
* POSTGRES_PORT=5432
* POSTGRES_DB=storefront_data
* POSTGRES_DB_TEST=storefront_test
* POSTGRES_USER=postgres
* POSTGRES_PASSWORD=passypass

* BCRYPT_PASSWORD=ABC56789
* SALT_ROUNDS=10

* TOKEN_SECRET=supersecrettoken
