import React from 'react';
import style from './InputSecret.module.css';

const InputSecret = () => {
  return (
    <div className={style.wrapper}>
      <form name="inp" method="post">
        <span>Your new secret:</span>
        <input type="text" className={style.input}/>
        <input type="submit" value="Отправить"/>
      </form>
    </div>
  );
};

export default InputSecret;
