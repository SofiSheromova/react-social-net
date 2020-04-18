import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import PostsWall from './PostsWall/PostsWall';
import PropTypes from 'prop-types';

const Profile = ({posts, addPost, ownerData}) => {
  return (
    <div>
      <div className={style.info}>
        <div>
          <div className={style.name}>{ownerData.name}</div>
          <div className={style.description}>{ownerData.description}</div>
        </div>
        <Avatar linkImg={ownerData.linkImg}/>
      </div>
      <PostsWall addPost={addPost} posts={posts}/>
    </div>
  );
};

Profile.propTypes = {
  posts: PropTypes.array.isRequired,
  addPost: PropTypes.func.isRequired,
  ownerData: PropTypes.object.isRequired,
};

export default Profile;
