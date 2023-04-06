import React, { FC } from 'react';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Menu from '../components/Menu';
import { Container } from '@mui/system';
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
