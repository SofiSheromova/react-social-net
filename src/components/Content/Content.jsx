import React from 'react';
import style from './Content.module.css';
import SecretBox from './SecretsBox/SecretBox.jsx';
import Profile from './Profile/Profile.jsx';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Messages from './Messages/Messages';

const Content = ({posts, setPosts}) => {
  return (
    <div className={style.profile}>
      <Route path='/profile'>
        <Profile/>
        <SecretBox posts={posts} setPosts={setPosts}/>
      </Route>
      <Route path='/messages'>
        <Messages setMessages={undefined} messages={[]}/>
      </Route>
    </div>
  );
};

Content.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};


export default Content;
