import {Request, Response } from "express";
import UserModel from "../models/users.models"
import {validationResult} from 'express-validator';
import { encrypt } from '../utils/encrypt';
import {UserInterface} from '../types/users.types'



export const getUsers = async (req: Request, res: Response) => {
  const users: Array<UserInterface>  = await UserModel.find().sort({ _id: -1 }).select(['-password', '-__v']);
  return res.json(users)
}

export const createUser = async (req: Request, res: Response) => {
  const {name, lastName, email, password} = req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()[0]
      });
  }
  const userFind = await UserModel.findOne({email});
  if (userFind) {
    return res.status(400).send({message: "Email allready in use please use another"})
  }

  try {
  const user = await UserModel.create({
    name, lastName,email, password: encrypt(password)
  });
} catch (error) {
  res.status(400).json({error})
}
return res.status(201).json({message: "User has been create successfully"})
}