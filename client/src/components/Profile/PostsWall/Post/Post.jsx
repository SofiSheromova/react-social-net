import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';

const Post = ({content}) => {
  return (
    <div className={style.wrap}>
      <div className={style.post}>
        {content}
      </div>
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.string,
};

export default Post;
