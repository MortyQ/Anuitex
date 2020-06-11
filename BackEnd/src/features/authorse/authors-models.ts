import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";

export interface Authors {
    name: String;
    removed_at: Boolean;
    product_ids: String;
  };

  export const AuthorSchema = new mongoose.Schema({
      name: {type: String, required: true},
      removed_at: {type: Boolean, default: false},
      product_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book', }]

  })


  interface AuthorModel  extends Authors,mongoose.Document{}
  export const AuthorModel = mongoose.model<AuthorModel>('Authors', AuthorSchema);
