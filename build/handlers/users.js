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
exports.getUserByID = exports.index = exports.create = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const userModel = new user_1.UserStore();
const tokenSecret = config_1.default.tokenSecret;
const create = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userModel.create(req.body);
            const token = jsonwebtoken_1.default.sign({ user: user }, tokenSecret);
            res.json({
                message: 'Successfully created user',
                data: token
            });
        }
        catch (error) {
            return res.send('Cannot create user');
        }
    });
};
exports.create = create;
const index = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userModel.index();
            res.json({
                message: 'Successfully showing users',
                data: users
            });
        }
        catch (error) {
            return res.send('Cannot show users');
        }
    });
};
exports.index = index;
const getUserByID = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userModel.getUserByID(req.params.id);
            res.json({
                message: 'Successfully showing user',
                data: user
            });
        }
        catch (error) {
            return res.send('Cannot get user');
        }
    });
};
exports.getUserByID = getUserByID;
/*export const updateUser = async function(req: Request, res: Response) {
  const user = await userModel.updateUser(req.body);
  res.json({
    message: 'Successfully updated user',
    data: user
  });
};*/
/*export const deleteUser = async function(req: Request, res: Response) {
  const user = await userModel.deleteUser(req.params.id as unknown as Number);
  res.json({
    message: 'Successfully deleted user',
    data: user
  });
};*/
/*export const userAuthentication = async function(req: Request, res: Response) {
  const {email, password} = req.body;
  const user = await userModel.userAuthentication(email, password);
  const token = jwt.sign({user}, config.tokenSecret as unknown as string);

  if(!user) {
    return res.status(401).json({
      status: 'error',
      message: 'unauthenticated user'
    });
  };
  return res.json({
    status: 'ok',
    message: 'successfully authenticated user',
    data: {...user, token}
  });
};*/
