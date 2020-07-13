import React from 'react';
import style from './User.module.css';
import PropTypes from 'prop-types';

const User = ({user}) => {
  return (
    <div className={style.person}>
      <div>{user.name}</div>
      <img src={user.avatar} alt={user.name}/>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
