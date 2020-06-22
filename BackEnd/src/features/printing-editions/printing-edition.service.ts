import { BookModel, PrintingEdition } from '../shared/db-models/books-models';
import { createBook, getBooks, deleteBooks } from './printing-edition.repository';

export async function createBookService(book: PrintingEdition): Promise <Boolean> {

    const result = await createBook(book);
    if(!result){
        return false
    }
    return true

}

export async function getBooksService(){
    const result = await getBooks()
    return result
}

export  async function deleteBooksServices(id: string) {
    const result = await deleteBooks(id)
    return result
}