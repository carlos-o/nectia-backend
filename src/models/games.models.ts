import mongoose, { Schema } from "mongoose";
import {GameInterface} from '../types/games.types'

const GameSchema: Schema = new Schema<GameInterface>({
  uid: {
    type: String
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100
  },
  played: Boolean,
  purchased: Date,
  finished: Date, 
  createdAt: {
    type: Date,
    default: new Date()
  } 
})


const GameModel = mongoose.model<GameInterface>('Games', GameSchema);

export default GameModel;