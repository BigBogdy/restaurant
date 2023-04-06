import React, { FC } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from 'tss-react/mui';
import { Typography, Box, Grid } from '@mui/material';
import { Container } from '@mui/system';

type helpItemList = {
  id: number;
  text: string;
};

const helpList = [
  { id: 0, text: 'О ресторане' },
  { id: 1, text: 'Условия доставки' },
  { id: 2, text: 'Возврат товара' },
  { id: 3, text: 'Акции' },
];

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: 50,
  },
  underlinedText: {
    fontWeight: 400,
    fontSize: 14,
    color: 'white',
    textDecoration: 'underline',
    '&:hover': {
      color: 'hsla(0,0%,100%,.7)',
    },
    cursor: 'pointer',
    marginBottom: 5,
  },
}));
const Footer: FC = () => {
  const { classes } = useStyles();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Box
          sx={{
            margin: '26px 0px 0px 0px',
            display: 'flex',
            pb: 5,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: '#fff',
              minWidth: 64,
              height: 64,
              borderRadius: '50%',
              margin: '0px 55px 0px 0px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={scrollUp}
          >
            <KeyboardArrowUpIcon className={classes.icon} />
          </Box>
          <Box sx={{ mr: 10.75, minWidth: 212 }}>
            <Typography
              variant="body2"
              noWrap
              sx={{
                letterSpacing: '0.15rem',
                fontSize: 25,
              }}
            >
              LOGOS
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 'normal',
                mb: 0.875,
              }}
            >
              © ООО СК «АПШЕРОН» <br />
              Все права защищены. 2010-
              {new Date().getFullYear()}
            </Typography>
            <Typography className={classes.underlinedText}>
              Пользовательское соглашение
            </Typography>
            <Typography className={classes.underlinedText}>
              Карта сайта
            </Typography>
            <Typography className={classes.underlinedText}>
              Политика конфиденциальности
            </Typography>
          </Box>
          <Grid container spacing={5} sx={{ alignItems: 'center' }}>
            {helpList.map((item: helpItemList) => (
              <Grid key={item.id} item>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: 20,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
