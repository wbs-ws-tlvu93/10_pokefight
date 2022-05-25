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
