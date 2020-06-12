import {Response, Request} from 'express';
import { createBookService } from './printing-edition.service';

export async function createHandler(req: Request, res: Response){

    console.log(req.body)
    await createBookService(req.body)
    .then(book => res.send(book))
    .catch();
}