import AuthorModel,{ Authors, authorModel} from './authors-models';


export async function createAuthor (author: Authors ): Promise<Boolean>  {

    const result = await authorModel.create(author)
    if(!result){
        return false
    }
    return true
}

export async function addBook(idBooks:string, idAuthors:Array<string>) {

    idAuthors.forEach(async id => {
        const author = authorModel.findById(id)
        let newAuthor = await author
        newAuthor.product_ids.push(idBooks)
        const result = await authorModel.update(author, newAuthor )
    });
}

export async function getAuthors(): Promise<Array<AuthorModel>>{
    const result = await authorModel.find().populate('author_ids')
    return result
}