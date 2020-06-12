import { Authors, AuthorModel } from './authors-models';


export async function createAuthor (author: Authors ): Promise <Boolean>  {

    const result = await AuthorModel.create(author)
    if(!result){
        return false
    }
    return true
}

export async function addBook(idBooks:string, idAuthors:Array<string>) {



    idAuthors.forEach(async id => {
        const author = AuthorModel.findById(id)
        let newAuthor = await author
        newAuthor.product_ids.push(idBooks)
        const result = await AuthorModel.update(author, newAuthor )

    });



}