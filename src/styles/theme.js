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
    backgroundImage: 'linear-gradient(#F6F6F6, white)',
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
    backgroundColor: 'transparent'
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
    padding: '30px 60px 60px',
    backgroundColor: '#fff',
    textColor: '#696973 !important',
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
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonsContainer: {
	background: colors.gray,
    maxWidth: '1140px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '30px',
  },
  titleContainer: {
	marginRight: '155px',
    marginLeft: '155px',
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  titleText: {
    lineHeight: '48px',
    paddingTop: '50px',
    paddingBottom: '30px'
  },
  appForm: {
    background: colors.white,
    paddingTop: '16px',
    paddingBottom: '16px',
    marginBottom: '60px',
    marginRight: '155px',
    marginLeft: '155px'
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
    marginBottom: '16px',
	marginRight: '155px',
    marginLeft: '155px',
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
    color: '#fff !important'
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
      textTransform: 'none',
      fontSize: '2.8rem',
      fontWeight: 600,
      color: colors.secondary,
      marginTop: '32px',
      marginBottom: '34px'
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
    MuiTypography: {
      body2: {
        color: '#696973 !important'
      }
    },
    MuiStepLabel: {
      root: {
        fontFamily: 'Source Sans Pro, sans-serif'
      },
      alternativeLabel: {
        marginTop: '0px !important',
        zIndex: '1'
      },
      labelContainer: {
		marginTop: '7px !important'
	  },
      completed: {
        fontWeight: '600 !important',
      },
      active: {
        color: colors.secondary + ' !important',
        fontWeight: '600 !important',
      }
    },
    MuiStepConnector: {
      alternativeLabel: {
        top: '30px',
        left: 'calc(-50% + 20px)',
        right: 'calc(50% + 20px)',
        position: 'absolute',
        zIndex: '0'
      },
      lineHorizontal: {
        borderTopWidth: '2px',
        borderColor: '#EBEBEB'
      }
    },
    MuiPaper: {
      elevation2: {
        boxShadow: 'none',
        borderRadius: '4px',
        marginTop: '32px',
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
      containedPrimary: {
		marginBottom: '30px',
		color: colors.white,
      },
      containedSecondary: {
		fontSize: '1.4rem',
		height: '40px',
		marginBottom: '30px',
		backgroundColor: colors.white,
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
