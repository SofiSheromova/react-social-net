import React from 'react';
import style from './Messages.module.css';
import PropTypes from 'prop-types';
import ChatList from './ChatList/ChatList';
import {Route} from 'react-router-dom';
import Chat from './Chat/Chat';

const Messages = ({users, setUsers}) => {
  return (
    <div className={style.profile}>
      <span>Your messages are here</span>
      <Route exact path='/messages'>
        <ChatList users={users}/>
      </Route>
      {
        users.map((user) => {
          return <Route key={user.id} path={`/messages/${user.id}`} >
            <Chat user={user}/>
          </Route>;
        })
      }
    </div>
  );
};

Messages.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default Messages;
