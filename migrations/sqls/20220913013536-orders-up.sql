
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100) NOT NULL,
    user_id BIGINT REFERENCES users(id)
);