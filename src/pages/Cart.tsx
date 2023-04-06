import { Box, Container, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import CartAddItem from '../components/CartAddItem';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import { clearProduct, selectCart } from '../redux/cart/slice';
import SkeletonCartAddItem from '../components/CartAddItem/SkeletonCartAddItem';
import { fetchDishesRandomly } from '../redux/dishes/slice';
import { AppDispatch, RootState } from '../redux/store';
import CartEmpty from '../components/CartEmpty';

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
}));

const Cart: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector(selectCart);
  const { randomDishes, status } = useSelector(
    (state: RootState) => state.dishes
  );

  const { classes } = useStyles();

  useEffect(() => {
    dispatch(fetchDishesRandomly());
  }, [dispatch]);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) dispatch(clearProduct());
  };
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Box sx={{ margin: '99px 0px 0px 0px', minHeight: '100vh' }}>
          <Box sx={{ ml: 32 }}>
            <Link to="/">
              <Typography className={classes.btnBack}>
                &lt; к выбору блюда
              </Typography>
            </Link>
            <Box
              sx={{ display: 'flex', mb: 9, justifyContent: 'space-between' }}
            >
              <Typography
                variant="body2"
                fontSize={32}
                sx={{
                  borderLeft: '5px solid #618967',
                  height: 40,
                  pl: 2,
                  textTransform: 'uppercase',
                }}
              >
                Корзина
              </Typography>
              <Typography
                onClick={onClickClear}
                fontSize={16}
                sx={{
                  pr: 13,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                Очистить корзину
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mb: 5, borderRadius: '10px' }}>
            {products.length > 0 ? (
              products.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
              <CartEmpty />
            )}
          </Box>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: 25,
              textTransform: 'uppercase',
              ml: 10.5,
              mb: 5,
            }}
          >
            Добавить к заказу
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {status === 'loading'
              ? [...new Array(4)].map((_, index) => (
                  <SkeletonCartAddItem key={index} />
                ))
              : randomDishes.map((item) => (
                  <CartAddItem key={item.id} {...item} />
                ))}
          </Box>
          <CartTotal />
        </Box>
      </Container>
    </>
  );
};

export default Cart;
