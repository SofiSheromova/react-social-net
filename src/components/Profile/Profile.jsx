import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import PostsWallContainer from './PostsWall/PostsWallContainer';
import PropTypes from 'prop-types';

const Profile = ({ownerData}) => {
  return (
    <div>
      <div className={style.info}>
        <div>
          <div className={style.name}>{ownerData.name}</div>
          <div className={style.description}>{ownerData.description}</div>
        </div>
        <Avatar linkImg={ownerData.linkImg}/>
      </div>
      <PostsWallContainer/>
    </div>
  );
};

Profile.propTypes = {
  ownerData: PropTypes.object.isRequired,
};

export default Profile;
