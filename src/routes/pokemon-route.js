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
router.get(p.get, async () => {});

/**
 * Get one Pokemon by id.
 */
router.get(p.getOne, async () => {});

/**
 * Get the info of one Pokemon by id and
 */
router.get(p.getOneInfo, async () => {});
