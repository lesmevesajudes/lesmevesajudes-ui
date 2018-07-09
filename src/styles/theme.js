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
  },
  modalContainer: {
    width: '300px',
    position: 'absolute',
    padding: '32px',
    backgroundColor: '#fff',
    boxShadow: 'px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);',

  },
  buttonResultsXS: {
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px'
    }
  },
  helpContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: '15px',
      backgroundColor: '#fff',
      padding: '10px'
    }
  },
  sliderContainerTitle: {
    marginTop: '0px !important',
    paddingTop: '25px !important',
    fontSize: '28px',
    color: '#333333 !important',
  },
  helpContainerBody: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  logoContainer: {
    maxWidth: '1080px',
    minHeight: '410px',
    margin: '0 auto',
    marginRight: 'auto',
    backgroundColor: '#00acd4',
    padding: '5px',
    '&::before':{
      background: '#00acd4 url(../pages/indexPage/AppLogo.png) no-repeat center'
    }
}
});

export default createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
    fontSize: 14,
    htmlFontSize: 14
  },
  palette: {
    primary: { 
      main: colors.primary,
      dark: colors.primary_dark,
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
