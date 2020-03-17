import { AuthorSchema ,Author } from './authors-models';

async function FirstAuthorTest(){

    const AuthorFirst = new Author({
        name: 'Haizen'
    })
}

export default FirstAuthorTest;
