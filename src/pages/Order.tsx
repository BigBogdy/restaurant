import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import OrderDertails from '../components/OrderDetails';

const useStyles = makeStyles()((theme) => ({
  btnBack: {
    textTransform: 'lowercase',
    paddingTop: 16,
    marginBottom: 28,
    color: '#fff',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-block',
    position: 'relative',
    paddingBottom: 1,
    cursor: 'pointer',
    '::before': {
      content: "''",
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 0,
      height: 2,
      backgroundColor: '#618967',
      transition: 'all 0.25s ease-out',
    },
    ':hover::before': {
      width: '100%',
    },
    ':hover': {
      color: '#618967',
    },
  },
  title: {
    borderLeft: '5px solid #618967',
    height: 40,
    paddingLeft: 16,
    textTransform: 'uppercase',
    marginRight: 16,
  },
}));

const Order: FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 800 }}>
        <Box sx={{ margin: '99px 0px 0px 0px', minHeight: '100vh' }}>
          <Box>
            <Link to="/cart">
              <Typography className={classes.btnBack}>
                &lt; в корзину
              </Typography>
            </Link>
            <Box sx={{ display: 'flex', mb: 7 }}>
              <Typography
                variant="body2"
                fontSize={32}
                className={classes.title}
              >
                Оформление заказа
              </Typography>
            </Box>
          </Box>
          <OrderDertails />
        </Box>
      </Container>
    </>
  );
};

export default Order;
