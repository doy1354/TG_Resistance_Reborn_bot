import { start } from './bot';
import dotenv from 'dotenv';

dotenv.config();

export async function startApp() {
  try {
    start();
  } catch (err) {
    console.error(err);
  }
}

startApp();
