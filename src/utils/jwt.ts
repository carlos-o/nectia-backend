import jwt from 'jwt-simple';
import envs from './settings';

function decodeJWT(token: string) {
  return jwt.decode(token.replace('Bearer ', ''), envs.SECRET_WORD)
}

export {
  decodeJWT
}