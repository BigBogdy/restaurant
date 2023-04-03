import React, { FC } from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, minusProduct } from '../../redux/slices/cartSlice';

const useStyles = makeStyles()((theme) => ({
  card: {
    background: '#494544',
    position: 'relative',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: 385,
    width: 325,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      filter: 'drop-shadow(0px 30px 60px rgba(43, 40, 40, 0.6))',
      transform: 'translateY(-5px)',
    },
  },
  image: {
    borderRadius: '10px 10px 0px 0px',
    height: 227,
    marginBottom: 15,
    width: 325,
  },
  btn: {
    display: 'flex',
    height: 44,
    justifyContent: 'center',
    width: 137,
    '& .MuiButton-endIcon': {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

type DishCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  category: number;
  description: string;
};
const DishCard: FC<DishCardProps> = ({
  id,
  imageUrl,
  title,
  price,
  description,
}) => {
  const { classes } = useStyles();
  let navigate = useNavigate();

  const foundItem = useSelector((state: any) =>
    state.cart.products.find((item: any) => item.id === id)
  );

  const itemCount = foundItem ? foundItem.count : '';

  const dispatch = useDispatch();

  const onCardClick = (e: any) => {
    if (e.target.dataset.isbtn !== 'true') {
      navigate(`/dish/${id}`);
      window.scrollTo(0, 0);
    }
  };

  const onClickAdd = (e: any) => {
    const product = {
      id,
      imageUrl,
      title,
      price,
      description,
    };
    dispatch(addProduct(product));
  };

  const onClickMinus = (e: any) => {
    dispatch(minusProduct({ id }));
  };

  return (
    <>
      <Box onClick={onCardClick} className={classes.card}>
        <img className={classes.image} src={imageUrl} alt="img" />
        {itemCount > 0 && (
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              position: 'absolute',
              background: '#79B382',
              right: -10,
              top: -10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography typography={'body2'} sx={{ fontSize: 20 }}>
              {itemCount}
            </Typography>
          </Box>
        )}
        <Box sx={{ pl: 2.5, flex: '1 0 auto' }}>
          <Typography
            variant="body2"
            fontSize={22}
            style={{ marginBottom: 5, lineHeight: 'normal' }}
          >
            {title}
          </Typography>
          <Typography fontSize={13}>{description}</Typography>
        </Box>
        <Box
          sx={{
            flex: '0 0 auto',
            padding: '0px 16px 18px 20px',
            display: 'flex',
          }}
        >
          {itemCount ? (
            <>
              <Button
                sx={{
                  width: 62,
                  height: 44,
                  fontSize: 32,
                  display: 'flex',
                  justifyContent: 'center',
                }}
                data-isbtn="true"
                onClick={onClickMinus}
              >
                -
              </Button>
              <Typography
                fontSize={20}
                sx={{
                  fontWeight: 600,
                  m: 'auto',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                {itemCount * price} ₴
              </Typography>
              <Button
                sx={{
                  width: 62,
                  height: 44,
                  fontSize: 32,
                  display: 'flex',
                  justifyContent: 'center',
                }}
                data-isbtn="true"
                onClick={onClickAdd}
              >
                +
              </Button>
            </>
          ) : (
            <>
              <Typography
                fontSize={20}
                sx={{
                  fontWeight: 600,
                  mr: 'auto',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                {price} ₴
              </Typography>
              <Button
                data-isbtn="true"
                onClick={onClickAdd}
                className={classes.btn}
                endIcon={
                  <img
                    data-isbtn="true"
                    src="/images/Cart.svg"
                    style={{ paddingLeft: 10, width: 24, height: 24 }}
                    alt="Cart"
                  />
                }
              >
                В корзину
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DishCard;
