"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoutes_1 = __importDefault(require("./api/usersRoutes"));
const productsRoutes_1 = __importDefault(require("./api/productsRoutes"));
const ordersRoutes_1 = __importDefault(require("./api/ordersRoutes"));
const routes = (0, express_1.Router)();
routes.use('/users', usersRoutes_1.default);
routes.use('/products', productsRoutes_1.default);
routes.use('/orders', ordersRoutes_1.default);
exports.default = routes;
