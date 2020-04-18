import React from 'react';
import style from './ChatList.module.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const ChatList = ({users}) => {
  return (
    <div>
      {
        users.map((user) => {
          return <NavLink key={user.id} to={`/messages/${user.id}`}>
            <div className={style.chatTitle}>{user.name}</div>
          </NavLink>;
        })
      }
    </div>
  );
};

ChatList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ChatList;
