import React, { FC } from 'react';
import { Box, Container } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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
  return (
    <>
      <Box
        sx={{
          width: 325,
          minHeight: 385,
          background: '#494544',
          borderRadius: 2.5,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <img
          style={{
            width: 325,
            height: 227,
            marginBottom: 15,
            borderRadius: '10px 10px 0px 0px',
          }}
          src={imageUrl}
          alt="img"
        />
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
            sx={{
              width: 137,
              height: 44,
              display: 'flex',
              justifyContent: 'center',
              '& .MuiButton-endIcon': {
                marginLeft: 0,
                marginRight: 0,
              },
            }}
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
