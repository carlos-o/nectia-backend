import {Request, Response } from "express";
import GameModel from "../models/games.models";
import UserModel from "../models/users.models";
import {validationResult} from 'express-validator';
import {GameInterface} from '../types/games.types';
import { compareDates } from '../validation/games.validations';


export const getGames = async (req: Request, res: Response) => {
  const {userId} = req.payload;

  const user = await UserModel.findOne({'_id': userId});

  if (!user) return res.status(200).send([]);

  const games: GameInterface[] = await GameModel.find({
    '_id': {
      '$in': user.gameList
    }
  }).sort({ _id: -1 }).select(['-__v'])

  return res.status(200).send(games);

}

export const getGame = async (req: Request, res: Response) => {
  const {id} = req.params
  
  let game: GameInterface | null = null
  
  try{
    game =  await GameModel.findById(id).select(['-__v'])
  }catch(error){
    return res.status(404).send({message: "Not Found"})
  }
  
  if (!game){
    return res.status(404).send({message: "Not Found"})
  }
  
  return res.send(game)
}

export const createGame = async (req: Request, res: Response) => {
  const {userId} = req.payload;
  const {name, played, purchased, finished} = req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()[0]
      });
  }
  
  if (compareDates(purchased, finished)){
    return res.status(400).send({message: "purchased date cannot be bigger to finished date"})
  }

  try {
    const game = await GameModel.create({name,played,purchased,finished});
    const saveGameToList = await UserModel.findOneAndUpdate({'_id': userId}, {'$push': {"gameList": game._id.toString()} }, {new: true})
  } catch (error) {
    return res.status(400).json({error})
  }
  return res.status(201).json({message: "game has been store successfully"})
}

export const updateGame = async (req: Request, res: Response) => {
  const {id} = req.params
  const {userId} = req.payload;
  const {body} = req;
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()[0]
      });
  }

  if (compareDates(body.purchased, body.finished)){
    return res.status(400).send({message: "purchased date cannot be bigger to finished date"})
  }
  
  const user = await UserModel.findOne({'_id': userId, 'gameList': {
    '$in': [id]
  }});
  
  if (!user) return res.status(404).send({message: 'Not Found'});
  let game: GameInterface | null = null
  console.log(body)
  try{
    game =  await GameModel.findOneAndUpdate({'_id': id}, body, {new: true})
  }catch(error){
    return res.status(404).send({message: "Not Found"})
  }
  if (!game){
    return res.status(404).send({message: "Not Found"})
  }
  return res.status(200).json({message: "game has been updated successfully"})
}

export const deleteGame = async (req: Request, res: Response) => {
  const {id} = req.params
  const {userId} = req.payload;
  
  const user = await UserModel.findOne({'_id': userId, 'gameList': {
    '$in': [id]
  }});
  
  if (!user) return res.status(404).send({message: 'Not Found'});

  let game: GameInterface | null = null

  try{
    game = await GameModel.findByIdAndDelete(id)
    await user.updateOne({'$pull': {"gameList": id} })
  }catch(error){
    return res.status(404).send({message: "Not Found"})
  }
  if (!game){
    return res.status(404).send({message: "Not Found"})
  }
  
  return res.status(204).send()
}