import React from 'react';
import Header from './components/Header';
import './index.css';
import './fonts/assets.css';
import { Box } from '@mui/system';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import FullDish from './pages/FullDish';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Order from './pages/Order';

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
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
