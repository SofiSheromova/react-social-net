import React from 'react';
import style from './Avatar.module.css';
import PropTypes from 'prop-types';

const Avatar = ({linkImg}) => {
  return (
    <div className={style.avatar}>
      <img className={style.avatarImg}
        src={linkImg}
        alt='avatar'
      />
    </div>
  );
};

Avatar.propTypes = {
  linkImg: PropTypes.string,
};

export default Avatar;
