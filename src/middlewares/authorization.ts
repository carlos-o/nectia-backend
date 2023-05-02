import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/users.models';
import { decodeJWT } from '../utils/jwt';

const authorization = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!req.path.includes('/signin') && !req.path.includes('/signup') && !req.path.includes('/') ) {
    if (!token) {
      return res.status(401).send({ message: 'Authorization is required' });
    }
    try {
      req.payload  = {
        email: '',
        userId: ''
      }
      const payload = decodeJWT(token);
      const userExist = await UserModel.findOne({email: payload.email});

      if (!userExist) return res.status(403).send({ message: 'User doesn\`t  exist' })

      req.payload.email = payload.email
      req.payload.userId = payload.id

    } catch (err) {
      console.error(err)
      return res.status(500).send({ message: 'Token invalid' })
    }
  }

  next()
}

export default authorization;