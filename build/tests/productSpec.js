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
const product_1 = require("../models/product");
//import pool from '../database';
const store = new product_1.ProductStore();
describe("Product model", function () {
    return __awaiter(this, void 0, void 0, function* () {
        it("index method should return an array", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield store.index();
                expect(result.length).toEqual(0);
            });
        });
    });
});
/*describe("Product model has required functions", async function () {
  it('should have a create function', async function () {
    expect(store.createProduct).toBeDefined();
  });

  it('should have a delete function', async function () {
    expect(store.deleteProduct).toBeDefined();
  });

  it('should have an index function', async function () {
    expect(store.index).toBeDefined();
  });

  it('should have a getProductByID function', async function() {
    expect(store.getProductByID).toBeDefined();
  });

  it('should have an updateProduct function', async function() {
    expect(store.updateProduct).toBeDefined();
  });
});*/
describe("Product model functions work as required", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const testProduct = {
            name: 'Hairdryer',
            price: 280
        };
        describe("Create function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                it('should create a new product', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const newTestProduct = yield store.createProduct(testProduct);
                        testProduct.id = newTestProduct.id;
                        expect(newTestProduct.name).toEqual(testProduct.name);
                    });
                });
            });
        });
        describe("getProductByID function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                it('should get product by ID', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const productToGet = yield store.getProductByID(testProduct.id);
                        expect(productToGet.id).toEqual(testProduct.id);
                    });
                });
            });
        });
        /*describe("updateProduct function", async function () {
          it('should update product', async function () {
            const productToUpdate = await store.updateProduct({
              name: 'Microwave',
              id: testProduct.id,
              price: 280
            });
            expect(productToUpdate.name).toEqual('Microwave');
          });
        });*/
        /*describe("deleteProduct function", async function () {
          it('should delete product', async function () {
            const productToDelete = await store.deleteProduct(testProduct.id as unknown as Number);
            expect(productToDelete.id).toEqual(testProduct.id);
          });
        });*/
    });
});
