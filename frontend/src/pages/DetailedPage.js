import React from 'react';
import { Outlet } from 'react-router-dom';

function DetailedPage() {
  return (
    <div>
      DetailedPage
      <Outlet />
    </div>
  );
}

export default DetailedPage;
