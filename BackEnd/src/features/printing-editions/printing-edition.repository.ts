import { PrintingEdition, BookModel } from '../shared/db-models/books-models';
import { addBook } from "../authorse/authors.repository";
import { ObjectId } from 'mongodb';



export async function createBook(book: PrintingEdition): Promise <Boolean> {
    const result = await BookModel.create(book)
    if(!result){
         return false
    }
    addBook(result._id, result.author_ids)
    return true

}

export async function getBooks(): Promise<Array<PrintingEdition>>{
    const result = await BookModel.find({removed_at: false }).populate('author_ids')
    return result
}

export async function deleteBooks(id: string): Promise<boolean> {
    const book =await BookModel.findById(id)
    if(!book){
        return false
    }
    book.removed_at = true
    const result =await book.save()
}