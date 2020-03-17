import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";

export interface IAuthors extends mongoose.Document {
    name: string;
    somethingElse?: number;
  };

  export const AuthorSchema = new mongoose.Schema({
      name: {type: String, required: true},

  })


  interface TestModel  extends IAuthors,mongoose.Document{}
  export const Author = mongoose.model<IAuthors>('Authors', AuthorSchema);
