import { Router } from 'express';
import { createHandler } from './authors.handler';




export const authorRouter = Router()

authorRouter.post('/create', createHandler)