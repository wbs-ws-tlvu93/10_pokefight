import express from 'express';
import apiRouter from './src/routes/api';

// Constants
const app = express();
const port = process.env.PORT || 3000;

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded);

app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendStatus(404));

app.listen(port);
