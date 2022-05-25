import { Router } from 'express';
import pokemonRouter from './pokemon-route.js';

// Export base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/pokemon', pokemonRouter);

export default baseRouter;
