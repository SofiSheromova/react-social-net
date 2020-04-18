import React from 'react';
import style from './Chat.module.css';
import PropTypes from 'prop-types';
import Message from './Message/Message';

const Chat = ({user}) => {
  return (
    <div className={style.chat}>
      <div className={style.name}>{user.name}</div>
      {
        user.messages.map((message) => {
          return <Message key={message.id} content={message.content}/>;
        })
      }
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Chat;
