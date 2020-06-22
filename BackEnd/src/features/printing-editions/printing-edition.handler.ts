import {Response, Request} from 'express';
import { createBookService, getBooksService, deleteBooksServices } from './printing-edition.service';

export async function createHandler(req: Request, res: Response){

    console.log(req.body)
    await createBookService(req.body.book)
    .then(book => res.send(book))
    .catch();
}

export async function getBooksHandler(req: Request, res: Response){
    await getBooksService()
    .then(books => res.send(books))
    .catch();
}

export async function deleteBooksHandler(req: Request, res: Response){
    await deleteBooksServices(req.body.id)
    .then(result => res.send(result))
    .catch();
}