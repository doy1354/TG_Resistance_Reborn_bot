import { NextFunction } from 'grammy';
import { MyContext } from '../types';
import { createUserWithUsername, findOrCreateUser, isUserExist } from '../../models/User';

export default async function attachUser(ctx: MyContext, next: NextFunction) {
  if (!ctx.from) {
    throw new Error('No from field found');
  }
  try {
    const userExist = await isUserExist(ctx.from.id);

    let user;
    if (!userExist) {
      
      user = await createUserWithUsername(
        ctx.from.id,
        ctx.from.username ? ctx.from.username : ctx.from.first_name
      );

    } else {
      user = await findOrCreateUser(ctx.from.id);
    }
    
    if (!user) {
      return;
    }

    ctx.session.dbuser = user;
    return next();
  } catch (err) {
    console.log("error", err)
  }
}
