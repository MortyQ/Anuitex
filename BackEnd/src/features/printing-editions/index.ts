import { Router } from 'express';
import { createHandler, getBooksHandler, deleteBooksHandler } from './printing-edition.handler';




export const bookRouter = Router()

bookRouter.post('/create', createHandler)
bookRouter.post('/getBooks', getBooksHandler)
bookRouter.post('/deleteBook', deleteBooksHandler)