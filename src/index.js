import express from 'express';
import apiRouter from './routes/api.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Constants
const app = express();
const port = process.env.PORT || 3000;

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(cors());
//app.use(express.json());
//app.use(express.urlencoded);

app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendStatus(404));

app.listen(port);
