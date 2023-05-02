import { Router } from "express";
import * as gameController from '../controllers/game.controller';
import {gameCreateSchema} from "../validation/games.validations";
import {checkSchema} from 'express-validator';

export const gamesRouter = Router();

gamesRouter.get('/', gameController.getGames);
gamesRouter.get('/:id', gameController.getGame);
gamesRouter.post('/', checkSchema(gameCreateSchema), gameController.createGame);
gamesRouter.put('/:id',checkSchema(gameCreateSchema), gameController.updateGame);
gamesRouter.delete('/:id', gameController.deleteGame);