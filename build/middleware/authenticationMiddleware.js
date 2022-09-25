"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const validateToken = function (req, res, next) {
    try {
        const tokenSecret = config_1.default.tokenSecret;
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const decodedToken = jsonwebtoken_1.default.verify(token, tokenSecret);
        next();
    }
    catch (error) {
        res.send('Token not valid');
        return;
    }
};
exports.default = validateToken;
