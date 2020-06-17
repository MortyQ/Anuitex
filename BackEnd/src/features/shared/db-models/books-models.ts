import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';
import { Print } from '../enums/printing';
import { Currency } from '../enums/currency';


export interface PrintingEdition{
    title: string;
    description: string;
    cover_image: string;
    removed_at: boolean;
    type: Print;
    price: number;
    currency: Currency;
    author_ids: Array<string>;
}

        export const bookSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        cover_image: { type: String },
        removed_at: { type: Boolean, default: false },
        productType: { type: Print, default: Print[0]},
        price: { type: Number, required: true },
        currency: { type: Currency, default: Currency[0] },
        author_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Authors', required: true }],
        })

    interface bookModel extends PrintingEdition, mongoose.Document{}

    export const BookModel = mongoose.model<bookModel>('Book', bookSchema)