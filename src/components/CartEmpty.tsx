import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    fontSize: '6rem',
    marginBottom: theme.spacing(2),
  },
}));

const CartEmpty: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.icon} color="primary">
        &#128591;
      </Typography>
      <Typography variant="body2" fontSize={24} align="center">
        Корзина пуста
      </Typography>
    </Box>
  );
};

export default CartEmpty;
