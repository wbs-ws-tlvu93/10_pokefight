import pokedex from '../../pokedex.json' assert { type: 'json' };

/**
 * Get one pokemon by id
 *
 * @param {number} id
 * @returns
 */
async function getOne(id) {
  for (const pokemon of pokedex) {
    console.log(typeof pokemon.id, typeof id);
    if (pokemon.id === id) console.log('Pokemon found!', id);
    if (pokemon.id === id) return pokemon;
  }
  return null;
}

/**
 * See if a pokemon with given id exists.
 *
 * @param {number} id
 * @returns
 */
async function persists(id) {
  for (const pokemon of pokedex) {
    if (pokemon.id === id) return true;
  }
  return false;
}

/**
 * Get all pokemon.
 *
 * @returns
 */
async function getAll() {
  return pokedex;
}

/**
 *
 * @param {number} id
 * @param {"name" | "type" | "base"} info
 * @returns
 */
async function getInfo(id, info) {
  for (const pokemon of pokedex) {
    if (pokemon.id === id) return pokemon[info];
  }
  return null;
}

export default { getOne, persists, getAll, getInfo };
