import React, { FC } from 'react';

import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { useDispatch } from 'react-redux';
import { addProduct, minusProduct, removeProduct } from '../redux/cart/slice';

import { Dish } from '../types';

const useStyles = makeStyles()((theme) => ({
  card: {
    background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
    width: 1096,
    height: 131,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #403C3B',
  },
  image: {
    width: 117,
    height: 86,
    marginRight: 39,
    paddingLeft: 40,
  },
  btnPlusMinClear: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CartItem: FC<Dish> = ({
  id,
  title,
  imageUrl,
  price,
  description,
  count,
  category,
}) => {
  const { classes } = useStyles();

  const dispatch = useDispatch();

  const onClickPlus = () => {
    const product: Dish = {
      id,
      imageUrl,
      title,
      price,
      description,
      category,
      count,
    };
    dispatch(addProduct(product));
  };

  const onClickMinus = () => {
    dispatch(minusProduct(id));
  };

  const onClickRemove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card className={classes.card}>
        <img className={classes.image} src={imageUrl} alt="img" />
        <Box>
          <Typography
            sx={{
              textTransform: 'uppercase',
              color: 'white',
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ minWidth: 265, fontSize: 12, mr: 27.875 }}>
            {description}
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item>
            <Button
              onClick={onClickMinus}
              className={classes.btnPlusMinClear}
              disabled={count <= 0}
            >
              <Typography className={classes.btnText}>-</Typography>
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 700,
              }}
            >
              {count}
            </Typography>
          </Grid>
          <Grid item xs>
            <Button onClick={onClickPlus} className={classes.btnPlusMinClear}>
              <Typography className={classes.btnText}>+</Typography>
            </Button>
          </Grid>
          <Grid item xs>
            <Typography sx={{ color: 'white', fontWeight: 700 }}>
              {price * count} ₴
            </Typography>
          </Grid>
          <Grid item xs>
            <Button onClick={onClickRemove} className={classes.btnPlusMinClear}>
              <Typography className={classes.btnText}>x</Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default CartItem;
