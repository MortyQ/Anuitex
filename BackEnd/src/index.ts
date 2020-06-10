import app from './app';
import mongoose from 'mongoose';
import Test from './dataAccess/initial';
import FirstAuthorTest from './features/authorse/authors-initial'
import BookTest from './features/printing-editions/first-book';
import { authRouter } from './features/auth/index';
import  cors from 'cors';
import bodyParser from 'body-parser';








app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Test();
// BookTest();
// FirstAuthorTest();

// mongoose.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true })


app.use('/auth', authRouter)


function main(){
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))

}



main();

