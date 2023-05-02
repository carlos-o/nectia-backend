import mongoose, { Schema} from "mongoose";
import {UserInterface} from '../types/users.types'

const UserSchema: Schema = new Schema<UserInterface>({
  uid: {
    type: String
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30
  },
  gameList: {
    type: [String],
    default: []
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  createdAt: {
    type: Date,
    default: new Date()
  } 
})


const UserModel = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;