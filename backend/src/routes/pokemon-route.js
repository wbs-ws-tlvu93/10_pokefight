import { StatusCodes } from 'http-status-codes';
import { Router } from 'express';

import pokemonService from '../services/pokemon-service.js';

// Constants
const router = Router();
const { OK, BAD_REQUEST } = StatusCodes;

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
  const pokemon = await pokemonService.getAll();
  return res.status(OK).json({ pokemon });
});

/**
 * Get one Pokemon by id.
 */
router.get(p.getOne, async (req, res) => {
  const { id } = req.params;
  // Check param
  if (!id) {
    return res.status(BAD_REQUEST);
  }
  // Fetch Data
  const pokemon = await pokemonService.getOne(Number(id));
  return res.status(OK).json({ pokemon });
});

/**
 * Get info of one Pokemon by id and
 */
router.get(p.getOneInfo, async (req, res) => {
  const { id, info } = req.params;
  // Check param
  if (!id || !info) {
    return res.status(BAD_REQUEST);
  }
  const infoType = ['name', 'base', 'type'];
  if (!infoType.includes(info))
    return res.status(BAD_REQUEST).send("Use ['name'|'base'|'type'] as info");

  // Fetch data
  const pokemon = await pokemonService.getInfo(Number(id), info);
  return res.status(OK).json({ pokemon });
});

// Export default
export default router;
