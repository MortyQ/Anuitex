import app from './app';
import mongoose from 'mongoose';
import Test from './dataAccess/initial';
import FirstAuthorTest from './features/authorse/authors-initial'


Test();
// FirstAuthorTest();

mongoose.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true })





function main(){
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))

}



main();

