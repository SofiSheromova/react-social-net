import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const style = (theme) => ({
  root: {
    height: 10,
    width: '100%',
    borderRadius: 5,
  },
});
const BorderLinearProgress = withStyles(style)(LinearProgress);


const CustomizedLinearProgress = (props) => {
  return (
    <BorderLinearProgress {...props}/>
  );
};

export default CustomizedLinearProgress;
