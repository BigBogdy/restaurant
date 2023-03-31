import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, unstable_HistoryRouter, useParams } from 'react-router-dom';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import MapLocation from '../components/MapLocation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Container, Card } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Dishes } from '../components/types';
import DishCard from '../components/DishCard';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/ContactCard';

const useStyles = makeStyles()((theme) => ({
  card: {
    width: 1210,
    height: 399,
    background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
    borderRadius: 10,
    marginBottom: 100,
  },
}));

const FullDish: FC = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  const [dish, setDish] = useState<Dishes | null>(null);
  const [dishes, setDishes] = useState<Dishes[]>([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await axios.get<Dishes[]>(
          'https://62f52077535c0c50e76a5f03.mockapi.io/dishes'
        );
        setDishes(response.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await axios.get<Dishes>(
          'https://62f52077535c0c50e76a5f03.mockapi.io/dishes/' + id
        );
        setDish(response.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchDish();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  if (!dish) {
    return <Typography sx={{ mt: 20 }}>Loading...</Typography>;
  }

  const dishesWithSameCategory = dishes.filter(
    (item) => item.category === dish.category && item.id !== dish.id
  );

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Box sx={{ margin: '99px 0px 0px 0px', minHeight: '100vh', mb: 10 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                mb: 3.375,
                pt: 2,
              }}
            >
              <Button
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  mr: 1.25,
                }}
              >
                <NavigateBeforeIcon />
              </Button>
              <Typography sx={{ ':hover': {} }}>Вернуться назад</Typography>
            </Box>
          </Link>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Card className={classes.card}>
              <Box sx={{ display: 'flex' }}>
                <img
                  style={{ width: 599, height: 399 }}
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
                      {dish.price} ₴
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
          <Typography
            variant="body2"
            fontSize={32}
            sx={{
              borderLeft: '5px solid #618967',
              height: 40,
              pl: 2,
              textTransform: 'uppercase',
              mb: 6.25,
            }}
          >
            С этим товаром покупают
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {dishesWithSameCategory.map((item) => (
              <Box
                onClick={() => navigate(`/dish/${item.id}`)}
                key={item.id}
                sx={{ mr: 2 }}
              >
                <DishCard
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <div style={{ marginLeft: -150 }}>
          <ContactCard />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MapLocation />
        </Box>
      </Container>
    </>
  );
};

export default FullDish;
