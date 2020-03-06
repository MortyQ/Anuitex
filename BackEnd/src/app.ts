import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

import authRoutes from './routes/auth'

//setting
app.set('port', 3333);

//middlewares
app.use(morgan('dev'));

// routes
app.use(authRoutes)


export default app;