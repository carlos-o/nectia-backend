import {Request, Response} from 'express'
import JWT from 'jwt-simple';
import envs from "../utils/settings";
import { checkEncrypt } from "../utils/encrypt";
import UserModel from "../models/users.models";
import {UserInterface} from '../types/users.types'


export const login = async (req: Request, res: Response) => {
  let {email, password} = req.body;
  if (!email) {
    return res.status(400).send({message: 'email is required'});
  }

  if (!password) {
    return res.status(400).send({message: 'password is required'});
  }

  const userFind: UserInterface | null  = await UserModel.findOne({email});

  if (!userFind) {
    return res.status(400).send({message: 'user or password is invalid'});
  }

  const passwordCheck = checkEncrypt(password, userFind.password);

  if (!passwordCheck) {
    return res.status(400).send({message: 'user or password is invalid'})
  }

  const token = JWT.encode({
    id: userFind._id,
    email: userFind.email
  }, envs.SECRET_WORD)

  return res.status(200).send({token})

}