import React from 'react';
import style from './Profile.module.css';
import SecretBox from './SecretsBox/SecretBox';
import Information from './Information/Information';

const Profile = () => {
  return (
    <div className={style.profile}>
      <Information/>
      <SecretBox/>
    </div>
  );
};

export default Profile;
