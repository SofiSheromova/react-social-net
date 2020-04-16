import React from 'react';
import style from './SecretBox.module.css';
import Secret from './Secret/Secret.jsx';
import InputSecret from './InputSecret/InputSecret.jsx';
import PropTypes from 'prop-types';

const SecretBox = ({posts, setPosts}) => {
  /**
   * Addition post to profile's posts.
   * @param {string} title The title for new post.
   */
  function addPost(title) {
    setPosts(
        [
          {
            title: title,
            id: Date.now(),
            completed: false,
          },
        ].concat(posts),
    );
  }

  return (
    <div className={style.box}>
      <InputSecret onCreate={addPost}/>
      {
        posts.map((post) => {
          return <Secret key={post.id} content={post.title}/>;
        })
      }
    </div>
  );
};

SecretBox.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default SecretBox;
