/*import usersRoutes from '../routes/api/usersRoutes';
import ordersRoutes from '../routes/api/ordersRoutes';
import productsRoutes from '../routes/api/productsRoutes';*/
import supertest from 'supertest';
import jwt from 'jsonwebtoken';
import config from '../config';
import app from '../server';

const tokenSecret = config.tokenSecret as string;
const allEndpoints = supertest(app);
/*const orderEndpoints = supertest(ordersRoutes);
const productEndpoints = supertest(productsRoutes);*/

describe('Testing user endpoints', async function () {
  it('gets the create endpoint', async function () {
    const response = await allEndpoints.post('/api/users/create');
    expect(response.status).toEqual(200);
  });

  it('gets the index endpoint and authorization', async function () {
    const testUser = {};
    const token = jwt.sign({user: testUser}, tokenSecret);
    const response = await allEndpoints.get('/api/users/index').auth(token, {type: 'bearer'});
    expect(response.status).toEqual(200);
  });

  it('gets the show endpoint and authorization', async function () {
    const testUser = {};
    const token = jwt.sign({user: testUser}, tokenSecret);
    const response = await allEndpoints.get('/api/users/show/1').auth(token, {type: 'bearer'});
    expect(response.status).toEqual(200);
  });
});

describe('Testing order endpoints', async function () {
  it('gets the create order endpoint and authorization', async function() {
    const testUser = {};
    const token = jwt.sign({user: testUser}, tokenSecret);
    const response = await allEndpoints.post('/api/orders/create').auth(token, {type: 'bearer'}).send({id: 1});
    expect(response.status).toEqual(200);
  });

  it('gets the show order by userID endpoint and authorization', async function() {
    const testUser = {};
    const token = jwt.sign({user: testUser}, tokenSecret);
    const response = await allEndpoints.get('/api/orders/show/1').auth(token, {type: 'bearer'});
    expect(response.status).toEqual(200);
  });
});

describe('Testing product endpoints', async function() {
  it('gets the create product endpoint and authorization', async function () {
    const testUser = {};
    const token = jwt.sign({user: testUser}, tokenSecret);
    const response = await allEndpoints.post('/api/products/create').auth(token, {type: 'bearer'});
    expect(response.status).toEqual(200);
  });

  it('gets the product index endpoint', async function () {
    const response = await allEndpoints.get('/api/products/index');
    expect(response.status).toEqual(200);
  });

  it('gets the show product by ID endpoint', async function () {
    const response = await allEndpoints.get('/api/products/show/1');
    expect(response.status).toEqual(200);
  });
});
