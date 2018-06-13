import {createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  primary: '#D1347F',
  primary_darker: '#be3175',
  primary_lighter: '#ed4495',
  disabled: '#f3f3f3',
  disabled_text: '#f7f7f7',
  white: '#fff',
}


export default createMuiTheme({
  palette: {
    primary: { main: colors.primary }, 
    secondary: { main: colors.white }, 
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      root: { // Global variabbles of buttons
        disableRipple: true,
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 600,
      },
      flat: { // Normal Button
        disableRipple: true,
        background: colors.primary,
        color: '#fff',
        boxShadow: 'none',
        '&:hover': {
          background: colors.primary_darker,
          bosShadow: 'none'
        },'&:active': {
          background: colors.primary_darker,
          bosShadow: 'none'
        }
      },
      disabled: { // Disabled Button
        background: colors.disabled,
        color: colors.disabled_text
      }
    }
  }
});
