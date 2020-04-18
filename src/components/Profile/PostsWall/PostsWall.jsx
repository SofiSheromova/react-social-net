import React from 'react';
import style from './PostsWall.module.css';
import Post from './Post/Post.jsx';
import InputPost from './InputPost/InputPost.jsx';
import PropTypes from 'prop-types';

const PostsWall = ({posts, setPosts}) => {
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
      <InputPost onCreate={addPost}/>
      {
        posts.map((post) => {
          return <Post key={post.id} content={post.title}/>;
        })
      }
    </div>
  );
};

PostsWall.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default PostsWall;
