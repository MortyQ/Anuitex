import app from './app';
import mongoose from 'mongoose';
import Test from './dataAccess/initial';
import FirstAuthorTest from './features/authorse/authors-initial'
import BookTest from './features/printing-editions/first-book';


Test();
BookTest();
// FirstAuthorTest();

mongoose.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true })





function main(){
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))

}



main();

