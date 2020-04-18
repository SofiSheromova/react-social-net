import React from 'react';
import style from './Messages.module.css';
import PropTypes from 'prop-types';
import ChatList from './ChatList/ChatList';
import {Route} from 'react-router-dom';
import ChatContainer from './Chat/ChatContainer';

const Messages = ({chats, dispatch}) => {
  return (
    <div className={style.profile}>
      <span>Your messages are here</span>
      <Route exact path='/messages'>
        <ChatList users={chats}/>
      </Route>
      {
        chats.map((chat) => {
          return <Route key={chat.id} path={`/messages/${chat.id}`} >
            <ChatContainer user={chat} dispatch={dispatch}/>
          </Route>;
        })
      }
    </div>
  );
};

Messages.propTypes = {
  chats: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Messages;
