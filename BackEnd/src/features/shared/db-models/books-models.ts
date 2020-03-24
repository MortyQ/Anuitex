import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';
import { Print } from '../enums/printing';


export interface PrintingEdition extends mongoose.Document{
    name: string;
    description: string;
    cover_image: string;
    removed_at: boolean;
    type: Print;
    price: number;
    currency: string;
}

    export const BookSchema = new mongoose.Schema({
        name: {type: String, required: true,},
        description: {type:String, required: true},
        cover_image: {type: String, required: true},
        removed_at: {type: Boolean, required: true},
        currency: {type: String, required: true},
        type: {type: Print, required: true, default: Print.book},
        price: {type: Number, required: true},
    })

    interface TestBook extends PrintingEdition, mongoose.Document{}

    export const BookModel = mongoose.model<TestBook>('Book', BookSchema)