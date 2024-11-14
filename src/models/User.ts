import { Schema, model, Types } from 'mongoose';

export interface IUser {
  tgId: number;
  username: string;
  signed: boolean;
  created: Date;
}

const userSchema = new Schema<IUser>({
  tgId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    default: '',
  },
  signed: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>('User', userSchema);

export async function isUserExist(tgId: number) {
  try {
    return await User.exists({ tgId });
  } catch (err) {
    return null;
  }
}

export async function findOrCreateUser(tgId: number) {
  try {
    return await User.findOneAndUpdate(
      { tgId },
      {},
      {
        upsert: true,
        new: true,
      }
    );
  } catch (err) {
    return null;
  }
}

export async function createUserWithUsername(tgId: number, username?: string) {
  try {
    return await User.findOneAndUpdate(
      { tgId },
      {
        username,
      },
      {
        upsert: true,
        new: true,
      }
    );
  } catch (err) {
    console.log("err", err)
    return null;
  }
}



