import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='app' element={<AppLayout />} />
        <Route path='product' element={<Product />} />
        <Route path='price' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
