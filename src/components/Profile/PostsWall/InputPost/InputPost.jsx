import React, {useState} from 'react';
import style from './InputPost.module.css';
import PropTypes from 'prop-types';

/**
 * Extension react hook
 * @param {string} defaultValue The first number.
 * @return {object}
 */
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value: value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

const InputPost = ({onCreate}) => {
  const input = useInputValue();

  /**
   * Submit handler for form
   * @param {Event} event The first number.
   */
  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form className={style.wrapper} onSubmit={submitHandler}>
      <input {...input.bind}/>
      <button type="submit">add secret</button>
    </form>
  );
};

InputPost.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default InputPost;
