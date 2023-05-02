import MongoConnection from '../src/service/mongodb.client';
import UserModel from '../src/models/users.models';
import { encrypt } from '../src/utils/encrypt';

const usersTest = [
  {
    "name": "admin",
    "lastName": "admin",
    "email": "admin@admin.com",
    "password": encrypt("admin123")
  },
  {
    "name": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": encrypt("123456")
  },
]

async function buildActions(documents: any[]) {
  let process: any[] = []
  for (const document of documents) {
    const action = {
      updateOne: {
        filter: {...document},
        update: {...document},
        upsert: true
      }
    }

    process.push(action)
  }

  return process;
}

async function process() {
  await MongoConnection.initDB();

  const status = await MongoConnection.status();

  if (status === 1) {
    const actions = await buildActions(usersTest);
    const response = await UserModel.bulkWrite(actions);

    console.log(response)
  }
}

process()