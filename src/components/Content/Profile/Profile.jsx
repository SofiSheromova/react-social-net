import React from 'react';
import style from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import Description from './Description/Description';
import Name from './Name/Name';
import SecretBox from './SecretsBox/SecretBox';
import PropTypes from 'prop-types';

const Profile = ({posts, setPosts}) => {
  return (
    <div>
      <div className={style.info}>
        <Name/>
        <Avatar/>
        <Description/>
      </div>
      <SecretBox setPosts={setPosts} posts={posts}/>
    </div>
  );
};

Profile.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default Profile;
