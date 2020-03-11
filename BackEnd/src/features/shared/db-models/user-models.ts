import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { Roles } from '../enums/roles';

export interface IUser extends mongoose.Document {
    name: string;
    somethingElse?: number;
  };

  // export const UserSchema = new mongoose.Schema({
  //   name: {type:String, required: true},

  // });

  export const UserSchema = new mongoose.Schema({
      email: {type: String, required: true, unique: true},
      avatar: {type:String, required: true},
      first_name: {type: String, required: true},
      last_name: {type: String, required: true},
      password_hash: {type: String, required: true},
      roles:{type: Roles, required: true, default: Roles.user}
  })

  export const User = mongoose.model<IUser>('User', UserSchema);

