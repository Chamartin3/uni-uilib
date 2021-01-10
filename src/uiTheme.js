import React from 'react';
import './assets/styles/index.scss'

const COLORS = {
  primary: '#17aecf',
  secondary: '#26496d',
  accent: '#ec1c6f',
  base: '#dbe1ed',
}


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Muli',
  },
  props: {
    MuiButton: {
      variant: 'contained'
    },
    MuiTextField: {
      variant: 'outlined'
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25,
      }
    },
    MuiInputBase: {
      "&$focus": {
        outline: 2
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 25,
        "&$focused": {
          color: COLORS.accent
        }
      },
    }
  },
  palette: {
    tonalOffset: 0.2,
    primary: {
      main: COLORS.primary,
      contrastText: '#ffff'
    },
    secondary: {
      main: COLORS.accent,
    }
  },


});


function AppTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default AppTheme;
