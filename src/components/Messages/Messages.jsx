import React from 'react';
import style from './Messages.module.css';
import PropTypes from 'prop-types';
import Message from './Message/Message';

const Messages = ({messages, setMessages}) => {
  return (
    <div className={style.profile}>
      <span>Your messages are here</span>
      {
        messages.map((message) => {
          return <Message key={message.id} content={message.content}/>;
        })
      }
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
};


export default Messages;
