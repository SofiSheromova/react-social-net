import React from 'react';
import style from './Profile.module.css';
import PostsWallContainer from './PostsWall/PostsWallContainer';
import PropTypes from 'prop-types';
import ProfileHead from './Head/Head';

const Profile = ({ownerData}) => {
  return (
    <div className={style.profile}>
      <ProfileHead ownerData={ownerData}/>
      <PostsWallContainer/>
    </div>
  );
};

Profile.propTypes = {
  ownerData: PropTypes.object.isRequired,
};

export default Profile;
