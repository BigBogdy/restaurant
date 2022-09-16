import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  card: {
    backgroundColor: '#2E2B2C',
    width: 526,
    height: 405,
    borderRadius: 15,
    marginTop: 66,
  },
}));

const Location = () => {
  const { classes } = useStyles();

  return (
    <>
      <Box>
        <Card className={classes.card}>
          <Typography
            fontSize={30}
            sx={{ textTransform: 'uppercase' }}
            variant="body2"
          >
            Контакты
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default Location;

// https://www.mapbox.com/
