import {Document, Schema, Model, Mongoose, }  from 'mongoose';
import mongoose from "mongoose";
import { Roles } from '../enums/roles';
import bcrypt from "bcrypt";
import crypto from "crypto";

const schema = mongoose.Schema
export interface User  {
    password_hash: String;
    first_name: String;
    last_name: String;
    roles: Roles;
    email: string;
    avatar: String;
    confirmed_email: Boolean;
    status: Boolean;
    removed_at: Boolean;
  };

      export const UserSchema = new schema({
          email: {type: String, required: true,},
          avatar: {type:String, required: false},
          first_name: {type: String, required: true},
          last_name: {type: String, required: true},
          password_hash: {type: String, required: true},
          roles:{type: Roles, required: true, default: Roles.user},
          removed_at: { type: Boolean, default: false },
          status: { type: Boolean, default: true },
          confirmed_email: { type: Boolean, default: false }
        })

        interface userModel extends User, mongoose.Document { }

         const userModel = mongoose.model<userModel>('User', UserSchema);

         export default userModel;