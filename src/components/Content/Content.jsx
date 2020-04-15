import React from 'react';
import style from './Content.module.css';
import SecretBox from './SecretsBox/SecretBox';
import Profile from './Profile/Profile';

const Content = () => {
  return (
    <div className={style.profile}>
      <Profile/>
      <SecretBox/>
    </div>
  );
};

export default Content;
