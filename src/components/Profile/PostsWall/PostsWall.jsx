import React from 'react';
import style from './PostsWall.module.css';
import Post from './Post/Post.jsx';
import InputPost from './InputPost/InputPost.jsx';
import PropTypes from 'prop-types';
import {addPostActionCreator, updateInputActionCreator}
  from '../../../redux/profileReducer';

const PostsWall = ({posts, dispatch, inputText}) => {
  const addPost = function(title) {
    dispatch(addPostActionCreator(title));
  };

  const updateInput = function(event) {
    dispatch(updateInputActionCreator(event));
  };

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
  dispatch: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default PostsWall;
