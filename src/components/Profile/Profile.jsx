import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import PostsWallContainer from './PostsWall/PostsWallContainer';
import PropTypes from 'prop-types';

const Profile = ({posts, ownerData, dispatch}) => {
  return (
    <div>
      <div className={style.info}>
        <div>
          <div className={style.name}>{ownerData.name}</div>
          <div className={style.description}>{ownerData.description}</div>
        </div>
        <Avatar linkImg={ownerData.linkImg}/>
      </div>
      <PostsWallContainer
        posts={posts}
        dispatch={dispatch}
        inputText={ownerData.inputText}
      />
    </div>
  );
};

Profile.propTypes = {
  posts: PropTypes.array.isRequired,
  ownerData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Profile;
