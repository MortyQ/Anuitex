import { PrintingEdition, BookModel } from '../shared/db-models/books-models';
import { Print } from '../shared/enums/printing';

async function BookTest(){

    const BookHawkey = new BookModel({
        name: 'Hawkey Story',
        description: 'Plal',
        cover_image: 'Image Note Found',
        remove_at: true,
        type: Print[0],
        price: 450,
        currency: 'History About US',
    })
    const result = BookModel.create(BookHawkey)
}

export default BookTest;