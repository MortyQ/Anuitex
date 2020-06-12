import { PrintingEdition, BookModel } from '../shared/db-models/books-models';
import { addBook } from "../authorse/authors.repository";



export async function createBook(book: PrintingEdition): Promise <Boolean> {
    
    console.log(book)
    const result = await BookModel.create(book)
    


    if(!result){
         return false
    }
    addBook(result._id, result.author_ids)
    return true


}

