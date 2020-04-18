import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';
import {addMessageActionCreator, updateMessageInputActionCreator}
  from '../../../redux/messadesReducer';

const ChatContainer = ({user, dispatch}) => {
  const addMessage = function(title) {
    dispatch(addMessageActionCreator(title, user.id));
  };

  const updateInput = function(event) {
    dispatch(updateMessageInputActionCreator(event, user.id));
  };
  return (
    <Chat
      user={user}
      inputMessage={user.inputMessage}
      updateInput={updateInput}
      addMessage={addMessage}
    />
  );
};

ChatContainer.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ChatContainer;
