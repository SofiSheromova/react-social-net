import React from 'react';
import style from './PostsWall.module.css';
import Post from './Post/Post.jsx';
import InputPost from './InputPost/InputPost.jsx';
import PropTypes from 'prop-types';

const PostsWall = ({posts, addPost, updateInput, inputText}) => {
  return (
    <div className={style.box}>
      <InputPost
        inputText={inputText}
        onUpdateInput={updateInput}
        onCreate={addPost}
      />
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
  inputText: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default PostsWall;
