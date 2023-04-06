import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Divider, Typography } from '@mui/material';
import MapLocation from '../../components/MapLocation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Container, Card } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import DishCard from '../../components/DishCard';
import ContactCard from '../../components/ContactCard';

import { useDispatch, useSelector } from 'react-redux';
import SkeletonFullDish from './SkeletonFullDish';
import SkeletonDishCard from '../../components/DishCard/SkeletonDishCard';

import { AppDispatch, RootState } from '../../redux/store';
import {
  addProduct,
  minusProduct,
  selectCartProductById,
} from '../../redux/cart/slice';
import { fetchDishById, fetchDishesRandomly } from '../../redux/dishes/slice';

const useStyles = makeStyles()(() => ({
  card: {
    width: 1210,
    height: 399,
    background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
    borderRadius: 10,
    marginBottom: 100,
  },
}));

const FullDish: FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { classes } = useStyles();

  const { randomDishes, selectedDish, status } = useSelector(
    (state: RootState) => state.dishes
  );

  const foundItem = useSelector(selectCartProductById(id));

  const itemCount = foundItem ? foundItem.count : '';

  useEffect(() => {
    dispatch(fetchDishesRandomly());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDishById(id));
  }, [id, dispatch]);

  const onClickPlus = () => {
    dispatch(addProduct(selectedDish));
  };

  const onClickMinus = () => {
    dispatch(minusProduct({ id }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Typography sx={{ ':hover': { textDecoration: 'underline' } }}>
                Вернуться назад
              </Typography>
            </Box>
          </Link>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            {status !== 'loading' && selectedDish ? (
              <Card className={classes.card}>
                <Box sx={{ display: 'flex' }}>
                  <img
                    style={{ width: 599, height: 399 }}
                    src={selectedDish.imageUrl}
                    alt="cold"
                  />
                  <Box sx={{ margin: '38px 0px 0px 50px' }}>
                    <Typography variant="body2" fontSize={25}>
                      {selectedDish.title}
                    </Typography>
                    <Typography sx={{ mb: 18.875 }}>
                      {selectedDish.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {itemCount ? (
                        <>
                          <Box
                            sx={{
                              width: 280,
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
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
                              variant="body2"
                              fontSize={20}
                              sx={{
                                fontWeight: 600,
                                alignItems: 'center',
                                minWidth: 80,
                                display: 'flex',
                                justifyContent: 'center',
                              }}
                            >
                              {itemCount * selectedDish.price} ₴
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
                              onClick={onClickPlus}
                            >
                              +
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Button
                            onClick={onClickPlus}
                            variant="text"
                            sx={{
                              padding: '7px 14px 7px 24px',
                              width: 160,
                              height: 52,
                              mr: 3.125,
                            }}
                          >
                            В корзину
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
                              <img
                                src="/images/ShoppingBag.svg"
                                alt="ShoppingBag"
                              />
                            </Box>
                          </Button>
                          <Typography variant="body2" fontSize={25}>
                            {selectedDish.price} ₴
                          </Typography>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Card>
            ) : (
              <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
                <SkeletonFullDish />
              </Container>
            )}
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
            {status === 'loading'
              ? [...new Array(4)].map((_, index) => (
                  <Box key={index} sx={{ mr: 2 }}>
                    <SkeletonDishCard />
                  </Box>
                ))
              : randomDishes.map((item) => (
                  <Box key={item.id} sx={{ mr: 2 }}>
                    <DishCard key={item.id} {...item} />
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
