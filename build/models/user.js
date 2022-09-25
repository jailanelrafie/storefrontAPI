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
exports.UserStore = void 0;
const index_1 = __importDefault(require("../database/index"));
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = function (password) {
    const salt = parseInt(config_1.default.salt);
    return bcrypt_1.default.hashSync(`${password}${config_1.default.pepper}`, salt);
};
class UserStore {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield index_1.default.connect();
                const sql = 'INSERT INTO users (user_name, email, full_name, password) values ($1, $2, $3, $4) RETURNING *';
                const result = yield connection.query(sql, [
                    user.user_name,
                    user.email,
                    user.full_name,
                    hashPassword(user.password)
                ]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cannot create user ${error}`);
            }
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield index_1.default.connect();
                const sql = 'SELECT user_name, id, email, full_name FROM users';
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (error) {
                throw new Error('Cannot show users');
            }
        });
    }
    getUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield index_1.default.connect();
                const sql = 'SELECT user_name, id, email, full_name FROM users WHERE id=($1)';
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error('Cannot get user');
            }
        });
    }
}
exports.UserStore = UserStore;
;
