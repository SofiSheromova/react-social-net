import React from 'react';
import style from './Content.module.css';
import SecretBox from './SecretsBox/SecretBox';
import Profile from './Profile/Profile';
import PropTypes from 'prop-types';

const Content = ({posts}) => {
  return (
    <div className={style.profile}>
      <Profile/>
      <SecretBox posts={posts}/>
    </div>
  );
};

Content.propTypes = {
  posts: PropTypes.array,
};


export default Content;
