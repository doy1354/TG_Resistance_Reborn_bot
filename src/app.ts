import { start } from './bot';
import dotenv from 'dotenv';
import startMongo from './utils/start-mongo';

dotenv.config();

export async function startApp() {
  try {
    await startMongo();
    start();
  } catch (err) {
    console.error(err);
  }
}

startApp();
