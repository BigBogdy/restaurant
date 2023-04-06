import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  banner: {
    alignItems: 'center',
    backgroundImage: 'url(images/Banner.jpg)',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
  },
}));

const Banner: FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.banner} sx={{ background: '#403C3B' }}>
        <Box sx={{ mt: 12.375, position: 'relative' }}>
          <Box
            sx={{
              height: '484px',
              padding: '0 20px',
              background:
                'linear-gradient(90deg,#211f20 45%,rgba(33,31,32,.9) 65%,rgba(33,31,32,0))',
              width: '70%',
            }}
          >
            <Typography
              component={'span'}
              sx={{
                color: 'white',
                fontSize: 67,
                pt: 12.5,
                textAlign: 'center',
                transform: 'rotate(-8.37deg)',
                width: 600,
                fontFamily: 'Zing',
                position: 'absolute',
                letterSpacing: 0,
                lineHeight: 'normal',
              }}
            >
              Доставка вкуснейших
              <br />
              блюд за 60 минут
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  component={'span'}
                  sx={{
                    color: 'white',
                    fontFamily: 'Zing',
                    zIndex: 2,
                    fontSize: 25,
                    position: 'absolute',
                  }}
                >
                  Еще не пробовал?
                </Typography>
                <img
                  src="/images/Rectangle.png"
                  style={{
                    position: 'relative',
                    transform: 'rotate(8.02deg)',
                  }}
                  alt="rectangle"
                />
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
