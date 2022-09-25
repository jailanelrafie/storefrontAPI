import express, {Request, Response} from 'express';
import { Order, ProductOfOrder, OrderStore } from '../models/order';

const orderModel = new OrderStore();

export const createOrder = async function(req: Request, res: Response) {
  try {
    const order = await orderModel.createOrder(req.body);
    res.json({
      message: 'Successfully created order',
      data: order
    });
  }
  catch (error) {
    return res.send('Cannot create order');
  }
};

export const getOrderByUserID = async function(req: Request, res: Response) {
  try {
    const order = await orderModel.getOrderByUserID(req.params.id as unknown as Number);
    res.json({
      message: 'Successfully showing order',
      data: order
    });
  }
  catch (error) {
    return res.send('Cannot get order');
  }
};

/*export const updateStatus = async function(req: Request, res: Response) {
  const order = await orderModel.updateStatus(req.body);
  res.json({
    message: 'Successfully updated order status',
    data: order
  });
};*/

/*export const addProductToOrder = async function(req: Request, res: Response) {
  const order = await orderModel.addProductToOrder(req.body);
  res.json({
    message: 'Successfully added product to order',
    data: order
  });
};*/

/*export const deleteOrder = async function(req: Request, res:Response) {
  const order = await orderModel.deleteOrder(req.params.id as unknown as Number);
  res.json({
    message: 'Successfully deleted order',
    data: order
  });
};*/
