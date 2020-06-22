import { Router } from 'express';
import { createHandler, getAuthorsHandler, changeAuthorsHandler } from './authors.handler';




export const authorRouter = Router()

authorRouter.post('/create', createHandler)
authorRouter.post('/getAuthors', getAuthorsHandler)
authorRouter.post('/changeAuthor', changeAuthorsHandler)