import {Response, Request} from 'express';
import { registerUser } from './auth.services';

export async function register(res:Response, req: Request,){


    await registerUser(req.body).then()
    console.log(req.body)
}