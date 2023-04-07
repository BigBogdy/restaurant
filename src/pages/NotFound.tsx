import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

const NotFound: FC = () => {
  return (
    <Container>
      <Box sx={{ height: '100vh' }}>
        <Typography
          sx={{
            mt: 12.2,
            color: '#fff',
            textAlign: 'center',
            paddingTop: '50px',
            textTransform: 'uppercase',
            fontSize: 36,
          }}
        >
          Page not found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
