import { AuthorSchema, AuthorModel } from './authors-models';

async function FirstAuthorTest(){

    const AuthorFirst = new AuthorModel({
        name: 'Haizen'
    })
}

export default FirstAuthorTest;
