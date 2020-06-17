import { Router } from 'express';
import { createHandler, getAuthorsHandler } from './authors.handler';




export const authorRouter = Router()

authorRouter.post('/create', createHandler)
authorRouter.post('/getAuthors', getAuthorsHandler)