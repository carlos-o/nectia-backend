import {Document } from "mongoose";

export interface GameInterface extends Document {
  uid:String,
  name: String,
  played: Boolean,
  purchased: Date,
  finished: Date|null,
  createdAt: Date
}