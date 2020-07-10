import React from 'react';
import style from './InputPost.module.css';
import PropTypes from 'prop-types';

const InputPost = ({inputText, onUpdateInput, onCreate}) => {
  /**
   * Submit handler for form
   * @param {Event} event The first number.
   */
  function submitHandler(event) {
    event.preventDefault();
    if (inputText.trim()) {
      onCreate(inputText);
    }
  }

  return (
    <form className={style.wrapper} onSubmit={submitHandler}>
      <input
        className={style.input}
        value={inputText}
        onChange={onUpdateInput}
      />
      <button className={style.button}
        type="submit">add secret</button>
    </form>
  );
};

InputPost.propTypes = {
  inputText: PropTypes.string,
  onUpdateInput: PropTypes.func,
  onCreate: PropTypes.func.isRequired,
};

export default InputPost;
