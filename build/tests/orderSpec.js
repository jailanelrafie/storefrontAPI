"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const user_1 = require("../models/user");
const product_1 = require("../models/product");
const storeO = new order_1.OrderStore();
const storeU = new user_1.UserStore();
const storeP = new product_1.ProductStore();
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
describe("Order model functions work as required", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const testOrder = {
            status: 'active',
            user_id: '1',
        };
        const testProduct = {
            name: 'test',
            price: 1
        };
        it("should create user", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const user = {
                    user_name: 'testingname',
                    email: 'testEmail',
                    full_name: 'fullName',
                    password: '12345'
                };
                yield storeU.create(user);
            });
        });
        describe("Create function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                it("should create a new order", function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const newTestOrder = yield storeO.createOrder(testOrder);
                        expect(parseInt(newTestOrder.user_id)).toEqual(1);
                    });
                });
            });
        });
        describe("getOrderByUserID function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                it("should get order by user ID", function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const orderToGet = yield storeO.getOrderByUserID(testOrder.user_id);
                        expect(orderToGet.user_id).toEqual(testOrder.user_id);
                    });
                });
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
});
