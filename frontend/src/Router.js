import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailedInfoPage from './pages/DetailedInfoPage';
import DetailedPage from './pages/DetailedPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PokemonListPage from './pages/PokemonListPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='pokemon' element={<PokemonListPage />} />
      <Route path='pokemon' element={<PokemonListPage />}>
        <Route path=':id' element={<DetailedPage />}>
          <Route path=':info' element={<DetailedInfoPage />} />
        </Route>
      </Route>

      <Route element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

// TODO: Decide to use Outlet, if not use direct paths and delete this comment block
// eslint-disable-next-line no-lone-blocks
{
  /* TODO: Decide to use Outlet, if not use direct paths
  <Route path='pokemon/:id' element={<DetailedPage />} />
  <Route path='pokemon/:id/:info' element={<DetailedInfoPage />} /> */
}
