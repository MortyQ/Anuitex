import { BookModel, PrintingEdition } from '../shared/db-models/books-models';
import { createBook } from './printing-edition.repository';


export async function createBookService(book: PrintingEdition): Promise <Boolean> {

    const result = await createBook(book);
    if(!result){
        return false
    }
    return true

}