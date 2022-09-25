import express, {Request, Response} from 'express';
import { Product, ProductStore } from '../models/product';

const productModel = new ProductStore();

export const createProduct = async function(req: Request, res: Response) {
  try {
    const product = await productModel.createProduct(req.body);
    res.json({
      message: 'Successfully created product'
    });
  }
  catch (error) {
    return res.send('Cannot create product');
  }
};

export const index = async function(req: Request, res: Response) {
  try {
    const products = await productModel.index();
    res.json({
      message: 'Successfully showing products',
      data: products
    });
  }
  catch (error) {
  return res.send('Cannot show product');
  }
};

export const getProductByID = async function(req: Request, res: Response) {
  try {
    const product = await productModel.getProductByID(req.params.id as unknown as Number);
    res.json({
      message: 'Successfully showing product',
      data: product
    });
  }
  catch (error) {
  return res.send('Cannot show product');
  }
};

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
