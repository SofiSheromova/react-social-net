import React from 'react';
import style from './Person.module.css';
import PropTypes from 'prop-types';

const Person = ({user}) => {
  return (
    <div className={style.person}>
      <div>{user.name}</div>
      <img src={user.avatar} alt={user.name}/>
    </div>
  );
};

Person.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Person;
