import React from 'react';
import style from './SecretBox.module.css';
import Secret from './Secret/Secret';
import InputSecret from './InputSecret/InputSecret';
import PropTypes from 'prop-types';

const SecretBox = ({posts}) => {
  return (
    <div className={style.box}>
      <InputSecret/>
      {
        posts.map((post) => {
          return <Secret key={post.id} content={post.title}/>;
        })
      }
    </div>
  );
};

SecretBox.propTypes = {
  posts: PropTypes.array,
};

export default SecretBox;
