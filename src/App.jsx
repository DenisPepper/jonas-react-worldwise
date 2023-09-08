import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page';
import { ProductPage } from './pages/product-page';
import { PricePage } from './pages/price-page';
import { NotFoundPage } from './pages/not-found-page';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='price' element={<PricePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
