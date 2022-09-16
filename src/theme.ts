import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#403C3B',
    },
    secondary: {
      main: '#618967',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            background:
              'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)',
            color: 'white',
            borderRadius: 10,
            fontSize: 14,
            fontFamily: 'Gilroy',
            fontWeight: 600,
            textTransform: 'none',
            lineHeight: 0,
            display: 'flex',
            justifyContent: 'start',
          },
        },
      ],
    },
  },
  typography: {
    body1: {
      fontFamily: 'Gilroy',
      fontWeight: 400,
      color: '#CFCFCF',
    },
    body2: {
      fontFamily: 'Gilroy',
      fontWeight: 700,
      color: 'white',
    },
    // h3: {
    //   fontFamily: 'Gilroy',
    //   fontWeight: 600,
    //   color: 'white',
    // },
  },
});
