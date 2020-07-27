import React from 'react';
import style from './InputPost.module.css';
import PropTypes from 'prop-types';
import TextField from './TextField';
import Button from '@material-ui/core/Button';

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
      <TextField
        label="Your post"
        className={style.input}
        value={inputText}
        onChange={onUpdateInput}
      />
      <Button variant="contained" color="primary"
        type="submit" className={style.button}>
            add post
      </Button>
    </form>
  );
};

InputPost.propTypes = {
  inputText: PropTypes.string,
  onUpdateInput: PropTypes.func,
  onCreate: PropTypes.func.isRequired,
};

export default InputPost;
