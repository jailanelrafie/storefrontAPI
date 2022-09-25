import pool from '../database/index';
import config from '../config';
import bcrypt from 'bcrypt';

const hashPassword = function(password: string) {
  const salt = parseInt(config.salt as string);
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};

export type User = {
  user_name: string;
  id?: number;
  email: string;
  full_name: string;
  password: string;
}

export class UserStore {
  async create(user: User): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql = 'INSERT INTO users (user_name, email, full_name, password) values ($1, $2, $3, $4) RETURNING *'
      const result = await connection.query(sql, [
        user.user_name,
        user.email,
        user.full_name,
        hashPassword(user.password)
      ]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error(`Cannot create user ${error}`);
    }
  }

  async index(): Promise<User[]> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT user_name, id, email, full_name FROM users';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    }
    catch (error) {
      throw new Error('Cannot show users');
    }
  }

  async getUserByID(id: Number): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT user_name, id, email, full_name FROM users WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error('Cannot get user');
    }
  }

  /*async updateUser(user: User): Promise<User> {
    try {
      const connection = await pool.connect();
      const sql = 'UPDATE users SET user_name=$1, email=$3, full_name=$4, password=$5 WHERE id=$2 RETURNING user_name, id, email, full_name';
      const result = await connection.query(sql, [
        user.user_name,
        user.id,
        user.email,
        user.full_name,
        hashPassword(user.password)
      ]);
      connection.release();
      return result.rows[0];
    }
    catch(error) {
      throw new Error('Cannot update user');
    }
  }*/

  /*async deleteUser(id: Number): Promise<User[]> {
    try {
      const connection = await pool.connect();
      const sql = 'DELETE FROM users WHERE id=($1) RETURNING user_name, id, email, full_name';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows;
    }
    catch(error) {
      throw new Error('Cannot delete user');
    }
  }*/

  /*async userAuthentication(email: string, password: string): Promise<User | null> {
    try {
      const connection = await pool.connect();
      const sql = 'SELECT password FROM users WHERE email=($1)';
      const result = await connection.query(sql, [email]);
      if (result.rows.length) {
        const {password: hashPassword} = result.rows[0];
        const isValidPassword = bcrypt.compareSync(`${password}${config.pepper}`, hashPassword);
        if (isValidPassword) {
          const userInformation = await connection.query('SELECT user_name, id, email, full_name FROM users WHERE email=($1)', [email]);
          return userInformation.rows[0];
        }
      }
      connection.release();
      return null;
    }
    catch(error) {
      throw new Error(`Cannot authenticate user ${error}`);
    }
  }*/
  
  /*async deleteAllUsers(): Promise<void> {
    const connection = await pool.connect();
    const sql = 'DELETE FROM users';
    await connection.query(sql);
    connection.release();
    return;
  }*/
};
