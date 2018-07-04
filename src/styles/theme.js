import {createMuiTheme} from '@material-ui/core/styles';

export const colors = {
  primary: '#d50283',
  primary_dark: '#be3175',
  primary_light: '#D4317C',
  secondary: '#004A8E',
  secondary_dark: '#014482',
  secondary_light: '#0054A1',
  disabled: '#f3f3f3',
  disabled_text: '#f7f7f7',
  white: '#fff',
  blackest: '#202020',
  gray: '#f2f2f2'
};
export const styles = theme => ({
  root: {
    width: '100%',
  },
  marginButtons: {
    marginBottom: 30 + 'px'
  },
  buttonIcon: {
    margin: theme.spacing.unit,
  },
  addMemberButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#fff !important',
    marginLeft: '15px'
  },
  leftIcon: {
    marginLeft: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit,
  },
  grayBackground: {
    backgroundColor: colors.white,
    color: colors.primary,
    '&:active': {
      backgroundColor: colors.disabled_text
    },
    '&:hover': {
      backgroundColor: colors.disabled_text 
    }
  },
  completedStep: {
    color: '#00acd4',
  },
  actualStep: {
    color: '#d50283'
  },
  AvatarUnknownPerson: {
    backgroundColor: '#bbbbbb'
  },
  titleUnknownPerson: {
    color: colors.primary + ' !important'
  },
  deleteListItemTitle: {
    marginLeft: '-75px !important',
    fontSize: '16px',
    cursor: 'pointer'
  },
  stepperContainer: {
    backgroundColor: '#fbfbfb'
  },
  boxDescriptionText: {
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px !important'
  },
  titleDescriptionText: {
    color: colors.blackest,
    fontWeight: '600',
    fontSize: '1.125rem',
    fontFamily: 'Source Sans Pro, sans-serif',
    textAlign: 'justify'
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
      main: colors.gray,
      dark: colors.disabled,
      contrastText: colors.primary
    }
  },
  overrides: {
    MuiStepLabel: {
      root: {
        fontFamily: 'Source Sans Pro, sans-serif'
      },
      alternativeLabel: {
        marginTop: '0px !important'
      },
      completed: {
        fontWeight: '600 !important',
      }
    },
    MuiStepConnector:{
      root: {
        backgroundColor: '#dedede',
        height: '2px'
      },
      lineHorizontal: {
        border: '0px solid #fff',
        borderTopWidth: '0px'
      },
      alternativeLabel: {
        top: '23px',
        left: 'calc(50% + 27px)',
        right: 'calc(-50% + 27px)',
      }
    },
    MuiPaper: {
      elevation2: {
        boxShadow: 'none',
        borderRadius: '4px'
      }
    },
    MuiList: {
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiTypography: {
      title: {
        marginTop:'10px',
        fontFamily: 'Source Sans Pro, sans-serif',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: colors.secondary
      },
      subheading: {
        color: colors.secondary
      }
    },
    MuiInput: {
      underline: {
        '&::after':{
          borderBottomColor: colors.secondary,
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px'
        }
      },
      error: {
        '&::after':{
          border: '1px solid red',
          backgroundColor: 'red'
        }
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      root: { // Global variables of buttons
        disableRipple: true,
        fontFamily: 'Source Sans Pro, sans-serif',
        fontWeight: 500
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
        fontWeight: 400,
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
