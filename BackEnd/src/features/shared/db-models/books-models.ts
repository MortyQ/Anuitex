import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';
import { Print } from '../enums/printing';


export interface PrintongEdition extends mongoose.Document{
    name: string;
    description: string;
    cover_image: string;
    removed_at: string;
    type: Print;
    price: number;
    currency: string;
    author_ids: ObjectId;
}

    export const BookSchema = new mongoose.Schema({
        name: {type: String, required: true, unique: true},
        description: {type:String, required: true},
        cover_image: {type: String, required: true},
        removed_at: {type: String, required: true},
        currency: {type: String, required: true},
        type: {type: Print, required: true, default: Print.book},
        price: {type: Number, required: true},
        author_ids: {type: ObjectId, required: true}
    })

    interface TestBook extends PrintongEdition, mongoose.Document{}

    export const BookModel = mongoose.model<TestBook>('Book', BookSchema)