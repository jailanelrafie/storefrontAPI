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
exports.getOrderByUserID = exports.createOrder = void 0;
const order_1 = require("../models/order");
const orderModel = new order_1.OrderStore();
const createOrder = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const order = yield orderModel.createOrder(req.body);
            res.json({
                message: 'Successfully created order',
                data: order
            });
        }
        catch (error) {
            return res.send('Cannot create order');
        }
    });
};
exports.createOrder = createOrder;
const getOrderByUserID = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const order = yield orderModel.getOrderByUserID(req.params.id);
            res.json({
                message: 'Successfully showing order',
                data: order
            });
        }
        catch (error) {
            return res.send('Cannot get order');
        }
    });
};
exports.getOrderByUserID = getOrderByUserID;
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
