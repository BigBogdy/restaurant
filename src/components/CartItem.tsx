import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  addProduct,
  clearProduct,
  minusProduct,
  removeProduct,
} from '../redux/slices/cartSlice';

const useStyles = makeStyles()((theme) => ({
  image: {
    width: 117,
    height: 86,
    marginRight: 39,
  },
}));

const CartItem = ({ id, title, imageUrl, price, description, count }: any) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addProduct({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusProduct({ id }));
  };

  const onClickRemove = () => {
    dispatch(removeProduct(id));
  };

  const { classes } = useStyles();

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
          width: 1096,
          height: 131,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #403C3B',
        }}
      >
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
          <Typography sx={{ width: 265, fontSize: 12, mr: 27.875 }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mr: 16.25 }}>
          <Button
            onClick={onClickMinus}
            sx={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: 20,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              -
            </Typography>
          </Button>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 700,
              padding: '0px 12px 0px 12px',
            }}
          >
            {count}
          </Typography>
          <Button
            onClick={onClickPlus}
            sx={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: 20,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              +
            </Typography>
          </Button>
        </Box>
        <Typography sx={{ color: 'white', fontWeight: 700, mr: 8.875 }}>
          {price * count} ₴
        </Typography>
        <Button
          onClick={onClickRemove}
          sx={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: 'white', fontSize: 16, fontWeight: 700 }}>
            x
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default CartItem;
