import {Response, Request} from 'express';
import { registerUser, complitRegistr, complitLogin } from './auth.services';

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

export async function loginUser(req: Request, res: Response) {
    await complitLogin(req.body.email, req.body.password_hash)
    .then(tokens => res.send(tokens))
    .catch();
}