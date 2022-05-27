import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import GameboyLayout from '../layout/GameboyLayout';

function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://wbs-pokemon-api.herokuapp.com/api/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.pokemon));
  }, []);

  return (
    <GameboyLayout>
      <div>
        PokemonListPage
        {pokemonList &&
          pokemonList.map((pokemon) => {
            console.log(pokemon);
            return (
              <div>
                {pokemon.name.english} |{pokemon.type[0]} |{pokemon.base.HP}
              </div>
            );
          })}
        <Outlet />
      </div>
    </GameboyLayout>
  );
}

export default PokemonListPage;

// {
//   "id": 808,
//   "name": {
//       "english": "Meltan",
//       "japanese": "メルタン",
//       "chinese": "美录坦",
//       "french": "Melmetal"
//   },
//   "type": [
//       "Steel"
//   ],
//   "base": {
//       "HP": 46,
//       "Attack": 65,
//       "Defense": 65,
//       "Sp. Attack": 55,
//       "Sp. Defense": 35,
//       "Speed": 34
//   }
// }
