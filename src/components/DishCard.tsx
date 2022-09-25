import React, { FC } from 'react';
import { Box, Container } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  card: {
    background: '#494544',
    borderRadius: 2.5,
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
  imageUrl: string;
  title: string;
  price: number;
  category: number;
  description: string;
};
const DishCard: FC<DishCardProps> = ({
  imageUrl,
  title,
  price,
  description,
}) => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.card}>
        <img className={classes.image} src={imageUrl} alt="img" />
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
          <Typography
            fontSize={20}
            sx={{
              fontWeight: 600,
              mr: 'auto',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {price} ₽
          </Typography>
          <Button
            className={classes.btn}
            endIcon={
              <img
                src="/images/Cart.svg"
                style={{ marginLeft: 12, width: 24, height: 24 }}
                alt="Cart"
              />
            }
          >
            В корзину
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DishCard;
