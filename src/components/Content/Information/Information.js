import React from 'react';
import style from './Information.module.css';
import Avatar from './Avatar/Avatar';
import Description from './Description/Description';

const Information = () => {
  return (
    <div className={style.info}>
      <Description/>
      <Avatar/>
    </div>
  );
};

export default Information;
