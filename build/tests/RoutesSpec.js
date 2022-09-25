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
/*import usersRoutes from '../routes/api/usersRoutes';
import ordersRoutes from '../routes/api/ordersRoutes';
import productsRoutes from '../routes/api/productsRoutes';*/
const supertest_1 = __importDefault(require("supertest"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const server_1 = __importDefault(require("../server"));
const tokenSecret = config_1.default.tokenSecret;
const allEndpoints = (0, supertest_1.default)(server_1.default);
/*const orderEndpoints = supertest(ordersRoutes);
const productEndpoints = supertest(productsRoutes);*/
describe('Testing user endpoints', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('gets the create endpoint', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield allEndpoints.post('/api/users/create');
                expect(response.status).toEqual(200);
            });
        });
        it('gets the index endpoint and authorization', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const testUser = {};
                const token = jsonwebtoken_1.default.sign({ user: testUser }, tokenSecret);
                const response = yield allEndpoints.get('/api/users/index').auth(token, { type: 'bearer' });
                expect(response.status).toEqual(200);
            });
        });
        it('gets the show endpoint and authorization', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const testUser = {};
                const token = jsonwebtoken_1.default.sign({ user: testUser }, tokenSecret);
                const response = yield allEndpoints.get('/api/users/show/1').auth(token, { type: 'bearer' });
                expect(response.status).toEqual(200);
            });
        });
    });
});
describe('Testing order endpoints', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('gets the create order endpoint and authorization', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const testUser = {};
                const token = jsonwebtoken_1.default.sign({ user: testUser }, tokenSecret);
                const response = yield allEndpoints.post('/api/orders/create').auth(token, { type: 'bearer' }).send({ id: 1 });
                expect(response.status).toEqual(200);
            });
        });
        it('gets the show order by userID endpoint and authorization', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const testUser = {};
                const token = jsonwebtoken_1.default.sign({ user: testUser }, tokenSecret);
                const response = yield allEndpoints.get('/api/orders/show/1').auth(token, { type: 'bearer' });
                expect(response.status).toEqual(200);
            });
        });
    });
});
describe('Testing product endpoints', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('gets the create product endpoint and authorization', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const testUser = {};
                const token = jsonwebtoken_1.default.sign({ user: testUser }, tokenSecret);
                const response = yield allEndpoints.post('/api/products/create').auth(token, { type: 'bearer' });
                expect(response.status).toEqual(200);
            });
        });
        it('gets the product index endpoint', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield allEndpoints.get('/api/products/index');
                expect(response.status).toEqual(200);
            });
        });
        it('gets the show product by ID endpoint', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield allEndpoints.get('/api/products/show/1');
                expect(response.status).toEqual(200);
            });
        });
    });
});
