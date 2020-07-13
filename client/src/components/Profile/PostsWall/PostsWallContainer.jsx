import {addPostActionCreator, updateInputActionCreator}
  from '../../../redux/profileReducer';
import PostsWall from './PostsWall';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.postsData,
  inputText: state.ownerData.inputText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (title) =>
    dispatch(addPostActionCreator(title)),
  updateInput: (event) =>
    dispatch(updateInputActionCreator(event)),
});

const PostsWallContainer =
    connect(mapStateToProps, mapDispatchToProps)(PostsWall);

export default PostsWallContainer;
