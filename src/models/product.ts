import pool from '../database/index';

export type Product = {
  name: String;
  id?: Number;
  price: Number;
};

export class ProductStore {
  async createProduct(product: Product): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = 'INSERT INTO products (name, price) values ($1, $2) RETURNING *';
      const result = await connection.query(sql, [
        product.name,
        product.price
      ]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error(`Cannot create product ${error}`);
    }
  }

  async index(): Promise<Product[]> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT * FROM products';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    }
    catch (error) {
      throw new Error('Cannot show products');
    }
  }

  async getProductByID(id: Number): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error('Cannot get product');
    }
  }

  /*async updateProduct(product: Product): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = 'UPDATE products SET name=$1, price=$3 WHERE id=$2 RETURNING name, id, price';
      const result = await connection.query(sql, [
        product.name,
        product.id,
        product.price
      ]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error('Cannot update product');
    }
  }*/

  /*async deleteProduct(id: Number): Promise<Product> {
    try {
      const connection = await pool.connect();
      const sql = 'DELETE FROM products WHERE id=($1) RETURNING name, id, price';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error('Cannot delete product');
    }
  }*/

  /*async deleteAllProducts(): Promise<void> {
    const connection = await pool.connect();
    const sql = 'DELETE FROM products';
    await connection.query(sql);
    connection.release();
    return;
  }*/
};
