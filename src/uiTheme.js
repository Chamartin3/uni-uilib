import React from 'react';
import './assets/styles/index.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

let baseColors = Object.entries({
  primary: '#17aecf',
  secondary: '#26496d',
  accent: '#ec1c6f',
  base: '#dbe1ed',
})

const colorReducer = (prev, [ name, color]) => {
  const tinycolor = require("tinycolor2");
  let base = tinycolor(color)
  return {
    [name]: {
      name:name,
      main:base.toHexString(),
      dark: base.darken().toHexString(),
      light: base.brighten().toHexString(),
      contrastText: base.isDark() ? '#F2F3F4': '#000000',
      oposite: name === 'accent' ? 'base' : 'accent',
      obj: base,
    },
    ...prev 
  }
}
const COLORS = baseColors.reduce(colorReducer, {})


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Muli',
  },
  props: {
    MuiTextField: {
      variant: 'outlined'
    },
  },
  overrides: {
    MuiInputBase: {
      "&$focus": {
        outline: 2
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 25,
        "&$focused": {
          color: COLORS.accent.main
        }
      },
    }
  },
  palette: {
    tonalOffset: 0.2,
    ...COLORS
  },


});


function UniUiTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export {
  UniUiTheme,
  COLORS
}
