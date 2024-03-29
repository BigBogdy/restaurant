import React, { FC, useEffect, useRef, useState } from 'react';
import {
  AppBar,
  TextField,
  InputAdornment,
  Toolbar,
  Typography,
  Button,
  Divider,
  Box,
  Container,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/slice';
import { Dish } from '../types';

const useStyles = makeStyles()((theme) => ({
  input: {
    width: 553,
    '& input': {
      fontSize: 18,
      color: 'white',
      padding: 0,
      fontFamily: 'Gilroy',
      fontWeight: 400,
      '&:hover': {
        outline: 'none',
      },
    },
    marginRight: 30,
    position: 'relative',
    '& > div': {
      borderRadius: 10,
      backgroundColor: '#504B4A',
      padding: 14,
    },
  },
  suggestionBox: {
    backgroundColor: '#504B4A',
    position: 'absolute',
    width: 449,
    margin: '172px 0px 0px 168px',
    padding: '10px 20px',
    height: 100,
    overflowY: 'scroll',
    borderRadius: '0px 0px 5px 5px',
    '::-webkit-scrollbar': {
      width: 6,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      borderRadius: 10,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
  },
}));

const Header: FC = () => {
  const { classes } = useStyles();

  const suggestionBoxRef = useRef<HTMLInputElement>(null);

  const { products } = useSelector(selectCart);

  const totalProducts = products.reduce(
    (sum: number, item: Dish) => sum + item.count,
    0
  );

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiYm9nZHVuMTciLCJhIjoiY2w4NG5sdHUzMDFvZDQwbzdvZm1nMnRiYyJ9.07cbj43Gix79lTCsYyao5Q&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [suggestionBoxRef]);

  return (
    <AppBar
      color="primary"
      sx={{
        height: 99,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Toolbar disableGutters>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="body2"
              noWrap
              sx={{
                mr: 9,
                fontWeight: 700,
                letterSpacing: '0.15rem',
                fontSize: 25,
              }}
            >
              LOGOS
            </Typography>
          </Link>
          <TextField
            onChange={handleChange}
            value={value}
            placeholder="Введите адрес доставки"
            sx={{
              ...(suggestions?.length > 0 && {
                '.MuiInputBase-root': {
                  borderRadius: '10px 10px 0px 0px',
                },
              }),
            }}
            className={classes.input}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 10,
                      cursor: 'pointer',
                    }}
                    src="../images/Location.svg"
                    alt="location"
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    style={{
                      width: 24,
                      height: 24,
                      cursor: 'pointer',
                    }}
                    src="../images/Search.svg"
                    alt="search"
                  />
                </InputAdornment>
              ),
            }}
          />
          {suggestions?.length > 0 && (
            <Box className={classes.suggestionBox} ref={suggestionBoxRef}>
              {suggestions.map((suggestion: any, i) => (
                <Typography
                  sx={{
                    cursor: 'pointer',
                    mb: 0.5,
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                  key={i}
                  onClick={() => {
                    setValue(suggestion.place_name);
                    setSuggestions([]);
                  }}
                >
                  {suggestion.place_name}
                </Typography>
              ))}
            </Box>
          )}
          <Box
            sx={{
              borderRadius: '50%',
              width: 32,
              height: 32,
              background:
                'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)',
              mr: 1.25,
              display: { md: 'block', xs: 'none' },
            }}
          >
            <img
              style={{
                width: 16,
                height: 16,
                margin: '9px 8px 7px',
              }}
              src="../images/Calling.svg"
              alt="call"
            />
          </Box>
          <Box
            sx={{
              mr: { lg: 23.5, md: 2 },
              display: { md: 'block', xs: 'none' },
            }}
          >
            <Typography variant="body1" fontSize={12}>
              Контакты
            </Typography>
            <Typography variant="body2" fontSize={16} sx={{ minWidth: 200 }}>
              +380 (50) 830-50-25
            </Typography>
          </Box>
          <Link to={'/cart'} style={{ textDecoration: 'none' }}>
            <Button
              onClick={() => console.log()}
              variant="text"
              sx={{
                padding: '7px 14px 7px 24px',
                width: 155,
                height: 52,
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
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'black',
                    fontFamily: 'Gilroy',
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: 'normal',
                  }}
                >
                  {totalProducts}
                </Typography>
              </Box>
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
