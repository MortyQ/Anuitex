import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { Roles } from '../enums/roles';
import bcrypt from "bcrypt";
import crypto from "crypto";

export interface User extends mongoose.Document {
    name: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    roles: Roles;
    email: string;
    avatar: string;
  };

      export const UserSchema = new mongoose.Schema({
          email: {type: String, required: true, unique: true},
          avatar: {type:String, required: true},
          first_name: {type: String, required: true},
          last_name: {type: String, required: true},
          password_hash: {type: String, required: true},
          roles:{type: Roles, required: true, default: Roles.user},
        })

        interface TestModel  extends User,mongoose.Document{}

        export const UserModel = mongoose.model<TestModel>('User', UserSchema);