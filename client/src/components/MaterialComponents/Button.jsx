import React from 'react';
import Button from '@material-ui/core/Button';
import ThemeProvider from './ThemeProvider';

const CustomizedButton = (props) => {
  return (
    <ThemeProvider>
      <Button variant="contained" color="primary" {...props}/>
    </ThemeProvider>
  );
};


export default CustomizedButton;
