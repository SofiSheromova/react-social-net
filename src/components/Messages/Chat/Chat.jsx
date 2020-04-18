import React from 'react';
import style from './Chat.module.css';
import PropTypes from 'prop-types';
import Message from './Message/Message';

const Chat = ({user, inputMessage, addMessage, updateInput}) => {
  /**
     * Submit handler for form
     * @param {Event} event The first number.
     */
  function submitHandler(event) {
    event.preventDefault();
    if (inputMessage.trim()) {
      addMessage(inputMessage);
    }
  }

  return (
    <div className={style.chat}>
      <div className={style.name}>{user.name}</div>
      {
        user.messages.map((message) => {
          return <Message key={message.id} content={message.content}/>;
        })
      }
      <form onSubmit={submitHandler}>
        <input value={inputMessage} onChange={updateInput}/>
        <button type="submit">send message</button>
      </form>
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object.isRequired,
  inputMessage: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default Chat;
