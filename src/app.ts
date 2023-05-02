import express from "express";
import cors from "cors";
import authorization from "./middlewares/authorization";
import setting from "./utils/settings"
import MongoConnection from './service/mongodb.client';
import { userRouter } from "./routes/user.routes";
import { authRouter } from "./routes/auth.routes"
import { gamesRouter} from "./routes/games.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authorization)

app.use('/', authRouter);
app.use('/user', userRouter);
app.use('/game', gamesRouter)

app.get('/', (req, res) => res.status(200).json({server:"Running server"}))

app.listen(setting.PORT, async () => {
  console.log(`listen server port ${setting.PORT}`)
  await MongoConnection.initDB();
  await MongoConnection.status();
})
