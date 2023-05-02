import {Document } from "mongoose";

export interface UserInterface extends Document{
  uid: string,
  name: string,
  lastName: string,
  gameList: string[],
  email: string,
  password: string,
  createdAt: Date
}