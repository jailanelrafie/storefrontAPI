import pool from '../database/index';

export type Order = {
  id?: Number;
  status: String;
  user_id: String;
};

export type ProductOfOrder = {
  id?: Number;
  quantity: Number;
  order_id: Number;
  product_id: Number;
};

export class OrderStore {
  async createOrder(order: Order): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
      const result = await connection.query(sql, [order.status, order.user_id]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error(`Cannot create order ${error}`);
    }
  }

  async getOrderByUserID(userID: Number): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT * FROM orders WHERE user_id=($1)';
      const result = await connection.query(sql, [userID]);
      connection.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error('Cannot get orders by this user');
    }
  }

/*async updateStatus(order: Order): Promise<Order> {
    try {
      const connection = await pool.connect();
      const sql = 'UPDATE orders SET status=($2) WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [order.id, order.status]);
      connection.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error(`Cannot update order status ${error}`);
    }
  }*/

/*async addProductToOrder(productToAdd: ProductOfOrder): Promise<ProductOfOrder> {
  try {
    const connection = await pool.connect();
    const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
    const result = await connection.query(sql, [
      productToAdd.quantity,
      productToAdd.order_id,
      productToAdd.product_id
    ]);

    connection.release();
    return result.rows[0];
  }
  catch (error) {
    throw new Error(`Cannot add product to order ${error}`);
  }
}*/

/*async deleteOrder(id: Number): Promise<unknown> {
  try {
    const connection = await pool.connect();
    const sqlForOrder = 'DELETE FROM orders WHERE id=($1) RETURNING *';
    const sqlForProductsOfOrder = 'DELETE FROM order_products WHERE order_id=($1)';
    const result = await connection.query(sqlForOrder, [id]);
    await connection.query(sqlForProductsOfOrder, [id]);
    return result.rows;
  }
  catch (error) {
    throw new Error(`Cannot delete order ${error}`);
  }
}*/

/*async deleteAllOrders(): Promise<void> {
  const connection = await pool.connect();
  const sql = 'DELETE FROM orders';
  await connection.query(sql);
  connection.release();
  return;
}*/
};
