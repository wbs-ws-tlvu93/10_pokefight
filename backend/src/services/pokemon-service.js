import pokedex from '../controller/pokemon.js';

function getAll() {
  return pokedex.getAll();
}

function getOne(id) {
  return pokedex.getOne(id);
}

function getInfo(id, info) {
  return pokedex.getInfo(id, info);
}

const pokemonService = {
  getAll,
  getOne,
  getInfo,
};
export default pokemonService;
