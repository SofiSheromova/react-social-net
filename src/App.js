import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({ownerData, messagesData}) => {
  return (
    <div className={style.App}>
      <div className={style.header}><Header/></div>
      <Navbar/>
      <div className={style.content}>
        <Route path='/profile'>
          <Profile ownerData={ownerData}/>
        </Route>
        <Route path='/messages'>
          <Messages chats={messagesData}/>
        </Route>
      </div>
      <Footer/>
    </div>
  );
};

App.propTypes = {
  ownerData: PropTypes.object.isRequired,
  messagesData: PropTypes.array.isRequired,
};

export default App;
