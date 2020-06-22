import { Authors } from './authors-models';
import { createAuthor, getAuthors, changeAuthors } from './authors.repository';


export async function create (author: Authors): Promise <Boolean> {

    const result = await createAuthor(author);
    if (!result){
        return result
    }
    return result
}

export async function getAuthorsService(){
    const result = await getAuthors()
    return result
}

export async function changeAuthorsService(id: string, name: string){
    const result = await changeAuthors(id, name)
    return result
}