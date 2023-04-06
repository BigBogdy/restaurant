import React, { FC } from 'react';
import { Box } from '@mui/system';
import { makeStyles } from 'tss-react/mui';
import { Typography, Button, Card, Grid } from '@mui/material';
import { ReactComponent as Flash } from '../Flash.svg';
import { ReactComponent as Onion } from '../Onion.svg';
import { ReactComponent as Chef } from '../Chef.svg';
const cards = [
  { text: 'Свежайшие продукты', imageUrl: <Onion /> },
  { text: 'Быстрая доставка', imageUrl: <Flash /> },
  { text: 'Лучшие повара', imageUrl: <Chef /> },
  { text: 'Свежайшие продукты', imageUrl: <Onion /> },
];

const useStyles = makeStyles()((theme) => ({
  banner: {
    alignItems: 'center',
    backgroundImage: 'url(/images/Banner2.jpg)',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: 10,
  },
  card: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(80,75,74,.7)',
    display: 'flex',
    flexDirection: 'column',
    height: 227,
    justifyContent: 'center',
    transition: 'background 0.2s ease-in-out, color 0.2s',
    width: 228,
    '&:hover': {
      background: 'rgba(80,75,74, 1)',
      '& > h2 ': {
        transition: 'color 0.2s',
        color: '#79B282',
      },
      '& > h1 > svg * path': {
        transition: 'color 0.2s',
        fill: '#79B282',
      },
      '& > h1 > svg > path': {
        transition: 'color 0.2s',
        fill: '#79B282',
      },
    },
  },
  btn: {
    width: 223,
    height: 59,
    paddingLeft: 64,
    fontSize: 13,
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)',
    marginLeft: 70,
  },
}));

const Description: FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.banner} sx={{ height: 610 }}>
          <Box sx={{ mt: 12.375, display: 'flex' }}>
            <Box
              sx={{
                height: 610,
                padding: '0 20px',
                background:
                  'linear-gradient(90deg,#1b1b1b 60%,rgba(28,28,28,.73) 80%,rgba(25,25,25,0))',
                width: '70%',
                marginRight: 3.5,
              }}
            >
              <Typography
                variant="body2"
                fontSize={32}
                sx={{
                  letterSpacing: 0,
                  lineHeight: 'normal',
                  padding: '100px 0px 0px 70px',
                }}
              >
                НАШЕ КАФЕ
              </Typography>
              <Typography
                fontSize={20}
                variant="body1"
                sx={{
                  color: '#CFCFCF',
                  lineHeight: 'normal',
                  width: 563,
                  padding: '26px 0px 60px 70px',
                  margin: 0,
                }}
              >
                Мы расположены в одном из самых живописных мест города — на
                берегу реки, это ваш оазис в черте города, куда можно сбежать от
                шумного и пыльного мегаполиса. Мы, действительно уникальные,
                ведь все продумано до мелочей: проект построен из дикого
                закарпатского сруба, камин в основном зале ресторана и
                панорамные окна с видом на реку, уютные беседки на берегу реки и
                лучшая видовая террасса, шатер с посадкой на 200 человек,
                сказочный детский домик и бассейн.
              </Typography>
              <Button className={classes.btn}>ПОСМОТРЕТЬ МЕНЮ</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid container spacing={2}>
                {cards.map((item, i) => (
                  <Grid item key={i}>
                    <Card className={classes.card}>
                      <Typography
                        variant="h1"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {item.imageUrl}
                      </Typography>
                      <Typography
                        variant="h2"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontFamily: 'Gilroy',
                          fontSize: 18,
                          fontWeight: 400,
                          color: 'white',
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Description;
