import { Router } from 'express';
import pokemonRouter from './pokemon-route';

// Export base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/pokemon', pokemonRouter);

export default baseRouter;
