import { Router } from "express";
import {getUsers, createUser} from '../controllers/user.controller';
import {userCreateSchema} from "../validation/user.validations";
import {checkSchema} from 'express-validator';

export const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', checkSchema(userCreateSchema), createUser);