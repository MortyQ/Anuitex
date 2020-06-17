import { AuthorSchema, authorModel } from './authors-models';

async function FirstAuthorTest(){

    const AuthorFirst = new authorModel({
        name: 'Haizen'
    })
}

export default FirstAuthorTest;
