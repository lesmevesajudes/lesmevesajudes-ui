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
  gray: '#f2f2f2',
  dark_gray: '#858585',
  green: '#009900',
};

export const styles = theme => ({
  addMemberButton: {
    backgroundColor: '#fff !important'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
    width: '100%',
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
    maxWidth: '1140px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fbfbfb'
  },
  boxDescriptionText: {
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px !important',
  },
  modalContainer: {
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
    fontSize: '2.2rem',
    textAlign: 'justify'
  },


  // verified styles
  formContainer: {
    background: colors.gray,
    borderRadius: '4px',
    maxWidth: '1140px',
    marginBottom: '30px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonsContainer: {
    maxWidth: '1140px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  titleContainer: {
    paddingTop: '16px',
    paddingBottom: '16px'
  },
  titleText: {
    lineHeight: '48px',
  },
  appForm: {
    background: colors.white,
    paddingTop: '16px',
    paddingBottom: '16px',
    marginBottom: '16px'
  },
  andSeparator: {
    textAlign: 'center',
    fontSize: '18px !important',
    color: colors.blackest,
    marginTop: '8px !important'
  },
  resultsContainer: {
    paddingTop: '16px',
    paddingBottom: '16px',
    marginBottom: '16px'
  },
  personListContainer: {
    marginBottom: '16px'
  },
  ResultWarning: {
    background: colors.gray,
    zIndex: 4
  },
  ResultPage: {
    color: '#265a96'
  },
  ResultItemResultOut: {
    margin: '0 0 15px 0',
    lineHeight: '55px',
    listStyle: 'none',
  },
  ItemResult: {
    padding: '10px',
    background: colors.white,
    margin: '0 0 16px 0',
  },
  ResultsBenefitText: {
    color: colors.secondary,
  },
  ResultsSeparator: {
    minHeight: '75px',
    borderLeft: '1px solid #cdcdcd',
    fontSize: '14px',
    lineHeight: '74px',
    textAlign: 'center'
  },
  whiteText: {
    color: colors.white
  },
  darkGrayText: {
    color: colors.dark_gray
  },
  greenText: {
    color: colors.green
  },
  link: {
    textDecoration: 'none'
  }
});

export default createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
    fontSize: 16,
    htmlFontSize: 10,
    h2: {
      textTransform: 'uppercase',
      fontSize: '2.4rem',
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
      alternativeLabel: {
        top: '24px',
        left: 'calc(-50% + 30px)',
        right: 'calc(50% + 30px)',
        position: 'absolute',
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
