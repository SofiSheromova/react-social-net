import React from 'react';
import style from './Message.module.css';
import PropTypes from 'prop-types';

const Message = ({content}) => {
  return (
    <div className={style.message}>
      {content}
    </div>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
