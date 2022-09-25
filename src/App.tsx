import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './index.css';
import './fonts/assets.css';
import { Box } from '@mui/system';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import FullDish from './pages/FullDish';

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
        </Routes>
      </Box>
    </>
  );
}

export default App;
