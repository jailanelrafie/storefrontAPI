import {Request, Response} from 'express';
import {User, UserStore} from '../models/user';
import jwt from 'jsonwebtoken';
import {Secret} from 'jsonwebtoken';
import config from '../config';


const userModel = new UserStore();
const tokenSecret = config.tokenSecret;

export const create = async function(req: Request, res: Response) {
  try {
    const user = await userModel.create(req.body);
    const token = jwt.sign({user: user}, tokenSecret as Secret);
    res.json({
      message: 'Successfully created user',
      data: token
    });
  } catch (error) {
    return res.send('Cannot create user');
  }
};

export const index = async function(req: Request, res: Response) {
  try {
    const users = await userModel.index();
    res.json({
      message: 'Successfully showing users',
      data: users
    });
  } catch (error) {
    return res.send('Cannot show users');
  }
};

export const getUserByID = async function(req: Request, res: Response) {
  try {
    const user = await userModel.getUserByID(req.params.id as unknown as Number);
    res.json({
      message: 'Successfully showing user',
      data: user
    });
  }
  catch (error) {
    return res.send('Cannot get user');
  }
};

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
