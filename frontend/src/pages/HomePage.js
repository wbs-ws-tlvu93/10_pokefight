import React from 'react';
import { Outlet } from 'react-router-dom';
import GameboyLayout from '../layout/GameboyLayout';

function HomePage() {
  return (
    <div>
      <GameboyLayout></GameboyLayout>
      <Outlet />
    </div>
  );
}

export default HomePage;
