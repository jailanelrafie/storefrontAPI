import {Order, OrderStore, ProductOfOrder} from '../models/order';
import {User, UserStore} from '../models/user';
import {Product, ProductStore} from '../models/product';

const storeO = new OrderStore();
const storeU = new UserStore();
const storeP = new ProductStore();

/*describe("Order model has required functions", async function () {
  it("should have a create function", async function () {
    expect(storeO.createOrder).toBeDefined();
  });

  it("should have a getOrderByUserID function", async function () {
    expect(storeO.getOrderByUserID).toBeDefined();
  });

  it("should have an updateStatus function", async function () {
    expect(storeO.updateStatus).toBeDefined();
  });

  it("should have an addProductToOrder function", async function () {
    expect(storeO.addProductToOrder).toBeDefined();
  });

  it("should have a deleteOrder function", async function () {
    expect(storeO.deleteOrder).toBeDefined();
  });
});*/

describe("Order model functions work as required", async function () {
  const testOrder: Order = {
    status: 'active',
    user_id: '1',
  };

  const testProduct: Product = {
    name: 'test',
    price: 1
  };

  it("should create user", async function () {
    const user = {
      user_name: 'testingname',
      email: 'testEmail',
      full_name: 'fullName',
      password: '12345'
    };
    await storeU.create(user);
  });

  describe("Create function", async function () {
    it("should create a new order", async function() {
      const newTestOrder = await storeO.createOrder(testOrder);
      expect(parseInt(newTestOrder.user_id as unknown as string)).toEqual(1);
    });
  });

  describe("getOrderByUserID function", async function () {
    it("should get order by user ID", async function() {
      const orderToGet = await storeO.getOrderByUserID(testOrder.user_id as unknown as Number);
      expect(orderToGet.user_id).toEqual(testOrder.user_id);
    });
  });

  /*describe("updateStatus function", async function () {
    it("should update order status", async function() {
      const orderToUpdate = await storeO.updateStatus({
        id: 1,
        status: 'done',
        user_id: '1'
      });
      expect(orderToUpdate.status).toEqual('done');
    });
  });*/

  /*describe("addProductToOrder function", async function () {
    it("should add product to order", async function() {
      const newTestProduct = await storeP.createProduct(testProduct);
      testProduct.id = newTestProduct.id;
      const product: ProductOfOrder = {
        quantity: 1,
        order_id: 1,
        product_id: 1
      };
      const addedOrder = await storeO.addProductToOrder(product);
      expect(parseInt(addedOrder.order_id as unknown as string)).toEqual(1);
    });
  });*/

  /*describe("deleteOrder function", async function () {
    it("should delete product", async function () {
      const deletedOrder = await storeO.deleteOrder(testOrder.id as unknown as Number);
      expect(deletedOrder).toEqual([]);
    });
  });*/
});
