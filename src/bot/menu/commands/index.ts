import { Composer, InlineKeyboard } from 'grammy';
import { MyContext } from '../../types';
import { env } from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

export const bot = new Composer<MyContext>();

async function startMessage(ctx: MyContext) {
  const keyboard = new InlineKeyboard()
    .webApp('Riseup For REDO', `${env['GAME_URL']}`)

  let text = `Today, we stand united for the future of the TON Blockchain!

We, the people of TON, call on the ecosystem leads and KOLs to stop undermining the chain with repetitive, self-serving Tap2Earn games. It’s time to give the biggest narrative in crypto the space it truly deserves, time to rally for the TON memecoin ecosystem. #DigitalResistance`;
  await ctx.replyWithPhoto("https://ibb.co/g6NPPWF", {
    caption: text,
    reply_markup: keyboard,
    parse_mode: 'HTML'
  });
}

bot.command('start', async (ctx) => {
  try {
    await startMessage(ctx);
  } catch (e) {
    console.log("errr", e)
  }
});


