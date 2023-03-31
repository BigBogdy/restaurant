import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartAddItem = () => {
  const { totalPrice } = useSelector((state: any) => state.cart);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
        <Box
          sx={{
            background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
            width: 763,
            height: 105,
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ pl: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 1, fontSize: 18 }}>Итого:</Typography>
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {totalPrice} ₴
              </Typography>
            </Box>
            {totalPrice < 1500 ? (
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mr: 0.5, fontSize: 12 }}>
                  До бесплатной доставки не хватет:
                </Typography>
                <Typography sx={{ color: '#72A479', fontSize: 12 }}>
                  {1500 - totalPrice} ₴
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{ mr: 0.5, fontSize: 12, fontWeight: 700, color: 'white' }}
              >
                У вас бесплатная доставка!
              </Typography>
            )}

            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontSize: 12, mr: 0.5 }}>
                Минимальная сума заказа:
              </Typography>
              <Typography fontSize={12}>1500 ₴</Typography>
            </Box>
          </Box>
          <Link to="/order" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                mr: 3,
                width: 209,
                height: 51,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Оформить заказ
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CartAddItem;
