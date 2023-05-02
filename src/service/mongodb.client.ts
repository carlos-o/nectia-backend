import mongoose from 'mongoose';
import envs from "../utils/settings";

export default class MongoConnection {

  public static async initDB() {
    console.log('Connecting MongoDB...')
    try {
      await mongoose.connect(envs.MONGO_URL);
      console.log('MongoDB Connected...')
    } catch(error) {
      console.error(`ERROR. Codigo = ${error}`,);
      throw error;
    }
  }

  public static async status() {
    const status = mongoose.connection.readyState ?? 0;

    console.log('MongoDB Status: ', status === 1 ? 'connected!': 'Failed...');

    return status;
  }

}