import dotenv from "dotenv";
dotenv.config();

const setting = {
  PORT: process.env.APP_PORT || '3000',
  MONGO_URL: process.env.MONGO_URL || '',
  SECRET_WORD: process.env.SECRET_WORD || ''
}

export default setting;
