import bcrypt from 'bcryptjs';

import env from './settings';

export function encrypt(toEncrypt: string) {
  return bcrypt.hashSync(toEncrypt);
}

export function checkEncrypt(toCompare: string, hash: string) {
  return bcrypt.compareSync(toCompare, hash);
}