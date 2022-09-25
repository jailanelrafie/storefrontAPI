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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const index_1 = __importDefault(require("../database/index"));
class OrderStore {
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield index_1.default.connect();
                const sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
                const result = yield connection.query(sql, [order.status, order.user_id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cannot create order ${error}`);
            }
        });
    }
    getOrderByUserID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield index_1.default.connect();
                const sql = 'SELECT * FROM orders WHERE user_id=($1)';
                const result = yield connection.query(sql, [userID]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error('Cannot get orders by this user');
            }
        });
    }
}
exports.OrderStore = OrderStore;
;
