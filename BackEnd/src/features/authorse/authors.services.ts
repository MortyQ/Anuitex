import { Authors } from './authors-models';
import { createAuthor } from './authors.repository';


export async function create (author: Authors): Promise <Boolean> {

    const result = await createAuthor(author);
    if (!result){
        return result
    }
    return result

}