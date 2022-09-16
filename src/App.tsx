import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import './index.css';
import './fonts/assets.css';
import Menu from './components/Menu';
import Description from './components/Description';
import { Box, Container } from '@mui/system';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <>
      <Box
        sx={{ background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)' }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
          <Header />
          <Banner />
          <Menu />
          <Description />
          <Location />
          <Footer />
        </Container>
      </Box>
    </>
  );
}

export default App;
