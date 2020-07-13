import React from 'react';
import style from './Users.module.css';
import PropTypes from 'prop-types';
import User from './User/User';

const Users = ({users, changeFollowStatus}) => {
  return (
    <div className={style.user}>
      {
        users.map((user) => (
          <div key={user.id} className={style.line}>
            <User user={user}/>
            <button
              type="button"
              onClick={() => changeFollowStatus(user)}>
              {user.isFriend ? 'Unfollow' : 'Follow'}
            </button>
          </div>),
        )
      }
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  changeFollowStatus: PropTypes.func.isRequired,
};

export default Users;
