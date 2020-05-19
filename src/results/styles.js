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

export default  {
  overrides: {
    MuiTypography: {
      body2: {
        color: '#696973 !important'
      }
    }
  }
};
