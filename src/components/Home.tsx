import React from 'react';
import Banner from './Banner';
import Description from './Description';
import Menu from './Menu';
import { Box, Container } from '@mui/system';
import Location from './Location';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Banner />
        <Menu />
        <Description />
      </Container>
      <Location />
      <Footer />
    </>
  );
};

export default Home;
