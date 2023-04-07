import React, { FC } from 'react';
import { Container } from '@mui/material';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Menu from '../components/Menu';
import Location from '../components/Location';

const Home: FC = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Banner />
        <Menu />
        <Description />
      </Container>
      <Location />
    </>
  );
};

export default Home;
