import {Product, ProductStore} from '../models/product';
//import pool from '../database';

const store = new ProductStore();

describe("Product model", async function () {
  it("index method should return an array", async function () {
    const result = await store.index();
    expect(result.length).toEqual(0);
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

describe("Product model functions work as required", async function () {
  const testProduct: Product = {
    name: 'Hairdryer',
    price: 280
  };

  describe("Create function", async function () {
    it('should create a new product', async function () {
      const newTestProduct = await store.createProduct(testProduct);
      testProduct.id = newTestProduct.id;
      expect(newTestProduct.name).toEqual(testProduct.name);
    });
  });

  describe("getProductByID function", async function () {
    it('should get product by ID', async function () {
      const productToGet = await store.getProductByID(testProduct.id as unknown as Number);
      expect(productToGet.id).toEqual(testProduct.id);
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
