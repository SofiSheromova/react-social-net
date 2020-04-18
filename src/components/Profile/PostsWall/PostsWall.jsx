import React from 'react';
import style from './PostsWall.module.css';
import Post from './Post/Post.jsx';
import InputPost from './InputPost/InputPost.jsx';
import PropTypes from 'prop-types';

const PostsWall = ({posts, addPost}) => {
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
  addPost: PropTypes.func.isRequired,
};

export default PostsWall;
