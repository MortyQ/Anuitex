import {Response, Request} from 'express';
import { create, getAuthorsService, changeAuthorsService } from './authors.services'

export async function createHandler(req: Request, res: Response){

    await create(req.body)
    .then(author => res.send(author))
    .catch();
}

export async function getAuthorsHandler(req: Request, res: Response){
    await getAuthorsService()
    .then(author => res.send(author))
    .catch();
}

export async function changeAuthorsHandler (req: Request, res: Response) {
    await changeAuthorsService(req.body.id, req.body.name)
    .then(name => console.log(name))
    .catch();
}