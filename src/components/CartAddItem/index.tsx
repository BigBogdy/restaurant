import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/slice';
import { Dish } from '../types';

const useStyles = makeStyles()((theme) => ({
  image: {
    width: 209,
    height: 123,
  },
}));

const AddItemCart: FC<Dish> = ({ id, imageUrl, title, price, description }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addProduct({ id, imageUrl, title, price, description }));
  };

  return (
    <>
      <Box sx={{ mb: 7 }}>
        <Box
          sx={{
            width: 275,
            height: 234,
            transition: 'all 0.5s ease-out',
            '&:hover': {
              background: '#494544',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Box>
              <img className={classes.image} src={imageUrl} alt="img" />
            </Box>
            <Typography
              sx={{
                mb: 1.25,
                display: 'flex',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 700,
                color: '#fff',
                mt: 1,
                overflow: 'hidden',
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Typography sx={{ mr: 1 }}>Добавить</Typography>
              <Button
                onClick={onClickPlus}
                sx={{
                  borderRadius: '50%',
                  fontSize: 16,
                }}
              >
                +
              </Button>
            </Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
              {price} ₴
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddItemCart;
