import React from 'react';
import PropTypes from 'prop-types';
import {addPostActionCreator, updateInputActionCreator}
  from '../../../redux/profileReducer';
import PostsWall from './PostsWall';

const PostsWallContainer = ({posts, dispatch, inputText}) => {
  const addPost = function(title) {
    dispatch(addPostActionCreator(title));
  };

  const updateInput = function(event) {
    dispatch(updateInputActionCreator(event));
  };

  return (
    <PostsWall
      posts={posts}
      addPost={addPost}
      inputText={inputText}
      updateInput={updateInput}
    />
  );
};

PostsWallContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default PostsWallContainer;
