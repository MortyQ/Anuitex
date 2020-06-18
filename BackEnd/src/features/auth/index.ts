import { Router } from 'express';
import { register, registerEmail, loginUser } from './auth.handler';




export const authRouter = Router()

authRouter.post('/compliteRegister', registerEmail )
authRouter.post('/register', register)
authRouter.post('/login', loginUser)