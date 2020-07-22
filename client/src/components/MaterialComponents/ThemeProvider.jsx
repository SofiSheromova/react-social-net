import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8e5678',
    },
    secondary: {
      main: '#ff80ab',
    },
  },
});

const CustomThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CustomThemeProvider;

