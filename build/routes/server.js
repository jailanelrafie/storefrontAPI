"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../handlers/products"));
const routes = express_1.default.Router();
routes.get('/', function (request, response) {
    response.send('main route');
});
(0, products_1.default)(routes);
exports.default = routes;
