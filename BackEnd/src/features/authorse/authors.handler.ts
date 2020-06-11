import {Response, Request} from 'express';
import { create } from './authors.services'

export async function createHandler(req: Request, res: Response){

    console.log(req.body)
    await create(req.body)
    .then(author => res.send(author))
    .catch();
}