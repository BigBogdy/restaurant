import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import DishCard from './DishCard';
import axios from 'axios';
import { Dishes } from './types';

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

const menuList = [
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

//@ts-"id"nore
const TabPanel = (props: any) => {
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
  const [dishes, setDishes] = useState<Dishes[]>([]);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    fetchDishes();
  }, [categoryId]);

  async function fetchDishes() {
    try {
      const response = await axios.get<Dishes[]>(
        'https://62f52077535c0c50e76a5f03.mockapi.io/dishes?category=' +
          categoryId
      );
      setDishes(response.data);
    } catch (error) {
      alert(error);
    }
  }
  const [value, setValue] = useState(0);

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
          {dishes.map((item) => (
            <Grid item key={item.id}>
              <DishCard
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                category={item.category}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Menu;
