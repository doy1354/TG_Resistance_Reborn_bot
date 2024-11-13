import { MyContext } from "../types";
import { Composer } from "grammy";
import * as commands from "./commands";
export const bot = new Composer<MyContext>();

bot.use(commands.bot);


