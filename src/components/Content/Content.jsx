import React from 'react';
import style from './Content.module.css';
import SecretBox from './SecretsBox/SecretBox';
import Information from './Information/Information';

const Content = () => {
  return (
    <div className={style.profile}>
      <Information/>
      <SecretBox/>
    </div>
  );
};

export default Content;
