import React from 'react';
import style from './Dialog.module.css';
import PropTypes from 'prop-types';
import Message from './Message/Message';

const Dialog = ({dialog, inputMessage, addMessage, updateInput}) => {
  /**
     * Submit handler for form
     * @param {Event} event Submit event.
     */
  function submitHandler(event) {
    event.preventDefault();
    if (inputMessage.trim()) {
      addMessage(inputMessage);
    }
  }

  return (
    <div className={style.dialog}>
      <div className={style.name}>{dialog.name}</div>
      {
        dialog.messages.map((message) => {
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

Dialog.propTypes = {
  dialog: PropTypes.object.isRequired,
  inputMessage: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default Dialog;
