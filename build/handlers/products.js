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
exports.getProductByID = exports.index = exports.createProduct = void 0;
const product_1 = require("../models/product");
const productModel = new product_1.ProductStore();
const createProduct = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield productModel.createProduct(req.body);
            res.json({
                message: 'Successfully created product'
            });
        }
        catch (error) {
            return res.send('Cannot create product');
        }
    });
};
exports.createProduct = createProduct;
const index = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield productModel.index();
            res.json({
                message: 'Successfully showing products',
                data: products
            });
        }
        catch (error) {
            return res.send('Cannot show product');
        }
    });
};
exports.index = index;
const getProductByID = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield productModel.getProductByID(req.params.id);
            res.json({
                message: 'Successfully showing product',
                data: product
            });
        }
        catch (error) {
            return res.send('Cannot show product');
        }
    });
};
exports.getProductByID = getProductByID;
/*export const updateProduct = async function(req: Request, res: Response) {
  const product = await productModel.updateProduct(req.body);
  res.json({
    message: 'Successfully updated product',
    data: product
  });
};*/
/*export const deleteProduct = async function(req: Request, res: Response) {
  const product = await productModel.deleteProduct(req.params.id as unknown as Number);
  res.json({
    message: 'Successfully deleted product',
    data: product
  });
};*/
