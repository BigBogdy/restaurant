import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Button, Divider, Typography } from '@mui/material';
import MapLocation from '../components/MapLocation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Container, Card } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  card: {
    width: 1210,
    height: 399,
    background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
    borderRadius: 10,
  },
}));

const FullDish = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  const [dish, setDish] = useState([]);
  useEffect(() => {
    async function fetchDish() {
      try {
        const { data } = await axios.get(
          'https://62f52077535c0c50e76a5f03.mockapi.io/dishes/' + id
        );
        setDish(data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchDish();
  }, []);
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Box sx={{ margin: '99px 0px 0px 0px', height: '100vh' }}>
          <Box
            sx={{
              display: 'flex',
              marginBottom: 3.375,
            }}
          >
            <Button
              sx={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <NavigateBeforeIcon />
            </Button>
            <Typography> Вернуться назад</Typography>
          </Box>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Card className={classes.card}>
              <Box sx={{ display: 'flex' }}>
                <img
                  style={{ width: 599, heght: 399 }}
                  src={dish.imageUrl}
                  alt="cold"
                />
                <Box sx={{ margin: '38px 0px 0px 50px' }}>
                  <Typography variant="body2" fontSize={25}>
                    {dish.title}
                  </Typography>
                  <Typography sx={{ mb: 18.875 }}>
                    {dish.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      variant="text"
                      sx={{
                        padding: '7px 14px 7px 24px',
                        width: 155,
                        height: 52,
                        mr: 3.125,
                      }}
                    >
                      Корзина
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          height: 36,
                          ml: 2.5,
                          mr: 1.5,
                        }}
                      />
                      <Box>
                        <img src="/images/ShoppingBag.svg" alt="ShoppingBag" />
                      </Box>
                    </Button>
                    <Typography variant="body2" fontSize={25}>
                      {dish.price} ₽
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
        <MapLocation />
      </Container>
    </>
  );
};

export default FullDish;
