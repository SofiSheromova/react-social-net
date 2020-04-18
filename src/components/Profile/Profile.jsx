import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import PostsWall from './PostsWall/PostsWall';
import PropTypes from 'prop-types';

const Profile = ({posts, setPosts, ownerData}) => {
  return (
    <div>
      <div className={style.info}>
        <div>
          <div className={style.name}>{ownerData.name}</div>
          <div className={style.description}>{ownerData.description}</div>
        </div>
        <Avatar linkImg={ownerData.linkImg}/>
      </div>
      <PostsWall setPosts={setPosts} posts={posts}/>
    </div>
  );
};

Profile.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
  ownerData: PropTypes.object.isRequired,
};

export default Profile;
