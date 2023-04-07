import React, { FC, useState, useEffect } from 'react';
import { Grid, Tab, Tabs, Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchDishesByCategoryId } from '../redux/dishes/slice';

import SkeletonDishCard from './DishCard/SkeletonDishCard';

import DishCard from './DishCard';

const useStyles = makeStyles()((theme) => ({
  tabText: {
    fontFamily: 'Gilroy',
    paddingBottom: 26,
    color: '#CFCFCF',
    fontSize: 18,
    textTransform: 'none',
    letterSpacing: 0,
    padding: 20,
    minWidth: 0,
  },
}));

type MenuItemList = {
  id: number;
  name: string;
}[];

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const menuList: MenuItemList = [
  {
    id: 0,
    name: 'Холодные закуски',
  },
  { id: 1, name: 'Горячие закуски' },
  { id: 2, name: 'Мясные блюда ' },
  { id: 3, name: 'Супы' },
  { id: 4, name: 'Рыбные блюда' },
  { id: 5, name: 'Гриль меню' },
  { id: 6, name: 'Фирменные блюда' },
  { id: 7, name: 'Напитки' },
];

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel - ${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: '50px 40px ' }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Menu: FC = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch<AppDispatch>();

  const { categoryDishes, status } = useSelector(
    (state: RootState) => state.dishes
  );

  const [categoryId, setCategoryId] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(fetchDishesByCategoryId(categoryId));
  }, [categoryId, dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          height: 78,
          width: 1285,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
          sx={{
            '& button.Mui-selected': {
              color: '#fff',
              fontWeight: 500,
              fontFamily: 'Gilroy',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '29px 20px 26px 20px',
            },
          }}
          TabIndicatorProps={{ sx: { bgcolor: '#618967' } }}
        >
          {menuList.map((item, i) => (
            <Tab
              key={item.id}
              className={classes.tabText}
              label={item.name}
              onClick={() => setCategoryId(i)}
            />
          ))}
        </Tabs>
      </Box>

      {menuList.map((item, i) => (
        <TabPanel key={i} value={value} index={i}>
          <Typography
            variant="body2"
            fontSize={32}
            sx={{
              borderLeft: '5px solid #618967',
              height: 40,
              pl: 2,
              textTransform: 'uppercase',
            }}
          >
            {item.name}
          </Typography>
        </TabPanel>
      ))}
      <Box>
        <Grid container spacing={2.5}>
          {status === 'loading'
            ? [...new Array(4)].map((_, index) => (
                <Grid item key={index}>
                  <SkeletonDishCard />
                </Grid>
              ))
            : categoryDishes.map((item) => (
                <Grid item key={item.id}>
                  <DishCard {...item} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Menu;
