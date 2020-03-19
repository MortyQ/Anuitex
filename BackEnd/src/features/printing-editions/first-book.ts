import {PrintongEdition, BookModel } from '../shared/db-models/books-models';
import { Print } from '../shared/enums/printing';

async function BookTest(){

    const BookHawkey = new BookModel({
        name: 'Hawkey Story',
        description: 'Plal',
        cover_image: 'Image Note Found',
        remove_at: 'History',
        type: Print[0],
        prise: '450',
        courrency: 'History About US',
    })
        const result = BookModel.create(BookHawkey)
}

export default BookTest;