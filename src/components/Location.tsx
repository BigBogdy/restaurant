import React from 'react';
import { Box, Container } from '@mui/material';
import MapLocation from './MapLocation';
import ContactCard from './ContactCard';

const Location = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1600 }}>
        <Box>
          <ContactCard />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginTop: -175 }}>
              <MapLocation />
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Location;

// https://www.mapbox.com/
