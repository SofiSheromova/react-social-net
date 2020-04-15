import React from 'react';
import style from './Content.module.css';
import SecretBox from './SecretsBox/SecretBox.jsx';
import Profile from './Profile/Profile.jsx';
import PropTypes from 'prop-types';

const Content = ({posts, setPosts}) => {
  return (
    <div className={style.profile}>
      <Profile/>
      <SecretBox posts={posts} setPosts={setPosts}/>
    </div>
  );
};

Content.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};


export default Content;
