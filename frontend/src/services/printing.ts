import axios from 'axios';
import { PrintingEdition } from '../shared/models/printiong-models';

export async function createPrinting(book: PrintingEdition){
            const result = await axios.post('http://localhost:3333/books/create', {book})
            return result.data
}

export async function getBooks(){
    const result = await axios.post('http://localhost:3333/books/getBooks')
    return result.data
}