import { Authors, AuthorModel } from './authors-models';


export async function createAuthor (author: Authors ): Promise <Boolean>  {

    const result = await AuthorModel.create(author)
    if(!result){
        return false
    }
    return true
}