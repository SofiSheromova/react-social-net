import React from 'react';
import style from './Avatar.module.css';
import PropTypes from 'prop-types';

const Avatar = ({src}) => {
  return (
    <div className={style.avatar}>
      <img className={style.avatarImg}
        src={src}
        alt='avatar'
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
