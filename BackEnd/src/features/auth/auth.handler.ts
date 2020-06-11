import {Response, Request} from 'express';
import { registerUser, complitRegistr } from './auth.services';

export async function register(req: Request, res: Response){


    await registerUser(req.body.user)
    .then(user => res.send(user))
    .catch();
}

export async function registerEmail (req: Request, res: Response){
    await complitRegistr(req.body._id)
    .then(user => res.send(user))
    .catch();
}
