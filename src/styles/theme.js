import {createMuiTheme} from '@material-ui/core/styles';

export const colors = {
  primary: '#d50283',
  primary_dark: '#be3175',
  primary_light: '#D4317C',
  secondary: '#004A8E',
  secondary_dark: '#014482',
  secondary_light: '#0054A1',
  tertiary: '#00ACD4',
  disabled: '#f3f3f3',
  disabled_text: '#f7f7f7',
  white: '#fff',
  blackest: '#202020',
  gray: '#f2f2f2'
};

export const styles = theme => ({
  addMemberButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#fff !important',
    marginLeft: '15px'
  },
  buttonIcon: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginLeft: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit,
  },
  marginButtons: {
    marginBottom: 30 + 'px'
  },
  root: {
    width: '100%',
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
    color: colors.tertiary,
  },
  actualStep: {
    color: colors.primary,
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
    cursor: 'pointer',
    textAlign: 'center'
  },
  stepperContainer: {
    backgroundColor: '#fbfbfb'
  },
  boxDescriptionText: {
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px !important',
    //maxHeight: '550px',
    //minHeight: '200px',
    //overflowY: 'scroll'
  },
  buttonResultsXS: {
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px'
    }
  },
  modalContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    position: 'absolute',
    padding: '32px',
    backgroundColor: '#fff',
    boxShadow: 'px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);',

  },
  titleDescriptionText: {
    color: colors.blackest,
    fontWeight: '600',
    fontSize: '1.125rem',
    fontFamily: 'Source Sans Pro, sans-serif',
    textAlign: 'justify'
  },
  titlePage: {
    textAlign: 'left',
    marginLeft: '90px',
    float: 'left',
  },
  formMinHeight: {
    minHeight: '600px',
  },

  '@media only screen and (max-width: 1140px)': {
    titlePage: {
      float: 'left',
      marginLeft: '16px !important'
    },
    bgFormExterior: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
    },
    addPersonContainer: {
      marginLeft: '0px !important',
    }
  },
  '@media only screen and (max-width: 600px)': {
    titlePage: {
      float: 'left',
      marginLeft: '16px !important',
      lineHeight: '1.35417em !important'
    },

    buttonsContainer: {
      leftButton: {
        marginRight: '15px'
      },
      rightButton: {
        marginLeft: '15px'
      },
    },
    bgFormExterior: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
    },
    addPersonContainer: {
      marginLeft: '0px !important'
    },
    bgContainer: {
      background: 'none',
      margin: '0px auto',
      padding: '0px',
    },
    buttonResultsXS: {
      padding: '0px !important',
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
  },

  // verified styles
  formContainer: {
    background: '#f2f2f2',
    borderRadius: '4px',
    maxWidth: '1140px',
    margin: '30px auto',
  },
  titleContainer: {
    paddingTop: '16px',
    paddingBottom: '16px'
  },
  titleText: {
    lineHeight: '48px',
  },
  form: {
    minHeight: '600px',
    background: '#fff',
    paddingTop: '16px',
    paddingBottom: '16px',
    marginBottom: '16px'
  },
  andSeparator: { // FIXME: KILLME
    textAlign: 'center',
    fontSize: '18px !important',
    color: '#202020 !important',
    marginTop: '8px !important'
  }


});

export default createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
    fontSize: 14,
    htmlFontSize: 14,
    h2: {
      textTransform: 'uppercase',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.secondary,
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    useNextVariants: true,
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
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
      }
    },
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
    MuiStepConnector: {
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
    MuiInput: {
      underline: {
        '&::after': {
          borderBottomColor: colors.secondary,
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px'
        }
      },
      error: {
        '&::after': {
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
        }, '&:active': {
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
