import React from 'react';
import style from './People.module.css';
import PropTypes from 'prop-types';
import Person from './Person/Person';

const People = ({users, changeFollowStatus}) => {
  return (
    <div className={style.people}>
      {
        users.map((user) => (
          <div key={user.id} className={style.line}>
            <Person user={user}/>
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

People.propTypes = {
  users: PropTypes.array.isRequired,
  changeFollowStatus: PropTypes.func.isRequired,
};

export default People;
