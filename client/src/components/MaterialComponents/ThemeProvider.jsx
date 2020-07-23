import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#bf84a7',
      main: '#8e5678',
      dark: '#5f2b4c',
    },
    secondary: {
      light: '#f2b4d8',
      main: '#bf84a7',
      dark: '#8e5678',
    },
  },
});

const CustomThemeProvider = (props) => {
  return (
    <ThemeProvider theme={customTheme} {...props}>
      {props.children}
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CustomThemeProvider;

