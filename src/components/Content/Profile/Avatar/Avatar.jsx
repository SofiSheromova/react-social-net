import React from 'react';
import style from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={style.avatar}>
      <img
        src='https://i.pinimg.com/originals/f0/80/ec/f080ec2f072c4e81e9170dcb76731c85.jpg'
        alt='avatar'
      />
    </div>
  );
};

export default Avatar;
