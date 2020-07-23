import React from 'react';
import TextField from '@material-ui/core/TextField';
import ThemeProvider from './ThemeProvider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#bf84a7',
      },
      '&:hover fieldset': {
        borderColor: '#8e5678',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8e5678',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const CustomizedTextField= (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <CssTextField
        multiline
        className={classes.margin}
        variant="outlined"
        {...props}
      />
    </ThemeProvider>
  );
};

export default CustomizedTextField;
