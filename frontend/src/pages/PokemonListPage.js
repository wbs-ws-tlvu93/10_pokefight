import React from 'react';
import { Outlet } from 'react-router-dom';

function PokemonListPage() {
  return (
    <div>
      PokemonListPage
      <Outlet />
    </div>
  );
}

export default PokemonListPage;
