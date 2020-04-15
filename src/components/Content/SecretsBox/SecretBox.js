import React from 'react';
import style from './SecretBox.module.css';
import Secret from './Secret/Secret';
import InputSecret from './InputSecret/InputSecret';

const SecretBox = () => {
  return (
    <div className={style.box}>
      <InputSecret/>
      <Secret/>
      <Secret/>
      <Secret/>
      <Secret/>
    </div>
  );
};

export default SecretBox;
