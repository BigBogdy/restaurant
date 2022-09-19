import React from 'react';
import {
  Typography,
  Box,
  Card,
  Divider,
  Button,
  Container,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapLocation from './MapLocation';
const useStyles = makeStyles()((theme) => ({
  card: {
    backgroundColor: '#2E2B2C',
    width: 526,
    height: 405,
    borderRadius: 15,
    margin: '60px 0px 40px 220px',
    boxShadow: '0px 0px 70px rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    zIndex: 5,
  },
  divider: {
    background:
      'linear-gradient(90deg,rgba(0,0,0,.152),#5b5b5b 50%,rgba(0,0,0,.152))',
    border: 'none',
    height: '1px',
    margin: '26px 0px 15px 0px ',
  },
  icons: {
    color: '#fff',
    marginRight: 10,
  },
}));

const Location = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1600 }}>
        <Box>
          <Card className={classes.card}>
            <Typography
              fontSize={30}
              sx={{ textTransform: 'uppercase', padding: '25px 0px 0px 43px' }}
              variant="body2"
            >
              Контакты
            </Typography>
            <Divider className={classes.divider} />
            <Box sx={{ pl: 6.5 }}>
              <Box sx={{ display: 'flex' }}>
                <img
                  style={{ width: 24, height: 24, marginRight: 11 }}
                  src="/images/LocationGreen.svg"
                  alt="location"
                />
                <Box>
                  <Typography fontSize={14} marginBottom={0.5}>
                    Наш адрес:
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    marginBottom={2.5}
                  >
                    МО, городской округ Красногорск, село Ильинкое,
                    Экспериментальная улица, 10
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <img
                  style={{ width: 24, height: 24, marginRight: 11 }}
                  src="/images/MessageGreen.svg"
                  alt="location"
                />
                <Box>
                  <Typography fontSize={14} marginBottom={0.5}>
                    Наша почта:
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    bogda@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider className={classes.divider} />
            <Box sx={{ padding: '0px 0px 21px 52px', display: 'flex' }}>
              <Button
                sx={{
                  height: 59,
                  justifyContent: 'center',
                  textTransform: 'uppercase',
                  width: 211,
                  mr: 4,
                }}
              >
                Забронировать стол
              </Button>
              <Box>
                <Typography
                  variant="body2"
                  fontSize={23}
                  sx={{
                    cursor: 'pointer',
                    mb: 0.2,
                    height: 28,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  +7 (917) 510-57-59
                </Typography>
                <Typography fontSize={13}>
                  Звоните или оставляйте заявку
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant="body2"
                fontSize={16}
                fontWeight={600}
                sx={{ mr: 3 }}
              >
                Мы в соц сетях:
              </Typography>
              <Box>
                <FacebookIcon className={classes.icons} />
                <InstagramIcon className={classes.icons} />
                <YouTubeIcon className={classes.icons} />
              </Box>
            </Box>
          </Card>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <MapLocation />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Location;

// https://www.mapbox.com/
