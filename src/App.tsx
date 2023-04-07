import React from 'react';
import './index.css';
import './fonts/assets.css';
import { Box } from '@mui/system';

import { Routes, Route } from 'react-router-dom';

import FullDish from './pages/FullDish';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dish/:id" element={<FullDish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
