import {Document, Schema, Model, }  from 'mongoose';
import mongoose from "mongoose";
import { Print } from '../shared/enums/printing';
import { ObjectId } from 'mongodb';


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

