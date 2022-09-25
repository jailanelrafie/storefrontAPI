import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {Secret} from 'jsonwebtoken';
import config from '../config';

const validateToken = function(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenSecret = config.tokenSecret;
    const authHeader = req.headers.authorization as unknown as String;
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, tokenSecret as Secret);
    next();
  }
  catch (error) {
    res.send('Token not valid');
    return;
  }
};

export default validateToken;
