import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import Description from './Description/Description';
import Name from './Name/Name';

const Profile = () => {
  return (
    <div className={style.info}>
      <Name/>
      <Avatar/>
      <Description/>
    </div>
  );
};

export default Profile;
