import mongoose from 'mongoose';
import Test from './dataAccess/initial';
import FirstAuthorTest from './features/authorse/authors-initial'
import { authRouter } from './features/auth/index';
import  cors from 'cors';
import bodyParser from 'body-parser';
import { Application } from 'express';
import express from 'express';
import { authorRouter } from './features/authorse/index';
import { bookRouter } from './features/printing-editions/index';


const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Test();
// BookTest();
// FirstAuthorTest();

mongoose.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true })

app.use('/auth', authRouter)
app.use('/author', authorRouter)
app.use('/books', bookRouter)


function main(){
    app.listen(3333);
    console.log('Server on port', 3333)

}



main();

