import React from 'react';
import style from './Secret.module.css';
import PropTypes from 'prop-types';

const Secret = ({content}) => {
  return (
    <div className={style.secret}>
      {content}
    </div>
  );
};

Secret.propTypes = {
  content: PropTypes.string,
};

export default Secret;
