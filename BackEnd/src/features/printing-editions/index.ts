import { Router } from 'express';
import { createHandler } from './printing-edition.handler';




export const bookRouter = Router()

bookRouter.post('/create', createHandler)