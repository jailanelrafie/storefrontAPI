
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity INT DEFAULT 1,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES products(id)
);
