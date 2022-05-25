import { Router } from 'express';

// Constants
const router = Router();

// Paths
export const p = {
  get: '/',
  getOne: '/:id',
  getOneInfo: '/:id/:info',
};

/**
 * Get all Pokemon.
 */
router.get(p.get, async (req, res) => {
  res.send('Getting all pokemons');
});

/**
 * Get one Pokemon by id.
 */
router.get(p.getOne, async (req, res) => {
  res.send('Getting one pokemons');
});

/**
 * Get info of one Pokemon by id and
 */
router.get(p.getOneInfo, async (req, res) => {
  res.send('Getting info of one pokemon');
});

// Export default
export default router;
