CREATE TABLE users (
  user_name VARCHAR(100) NOT NULL,
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);
