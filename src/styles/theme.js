import {createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  primary: '#D1347F',
  primary_darker: '#be3175',
  primary_lighter: '#ed4495',
  disabled: '#f3f3f3',
  disabled_text: '#f7f7f7',
  white: '#fff',
}
export const styles = theme =>( {
  root: {
    width: '100%',
  },
  marginButtons: {
    marginBottom: 30 + 'px'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  buttonIcon: {
    smargin: theme.spacing.unit,
  },
  leftIcon: {
    marginLeft: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit,
  },
  grayButton: {
    backgroundColor: "#000",
    color: "#fff",
    "&:active": {
      backgroundColor: "#202020"
    },
    "&:hover": {
      backgroundColor: "#202020"
    }
  }

});
export default createMuiTheme({
  palette: {
    primary: { 
      main: colors.primary,
      dark: colors.primary_darker,
      contrastText: colors.white
    }, 
    secondary: { 
      main: colors.white,
      dark: colors.disabled,
      contrastText: colors.primary
    },
    tertiary: {
      main: '#000',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiStepLabel: {
      alternativeLabel: {
        marginTop: '0px !important'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      root: { // Global variabbles of buttons
        disableRipple: true,
        fontFamily: "'Source Sans Pro', sans-serif",
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none'
          },
      },
      flat: { // Normal Button
        disableRipple: true,
        boxShadow: 'none',
        '&:hover': {
          bosShadow: 'none'
        },'&:active': {
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
