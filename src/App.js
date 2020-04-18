import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({state, dispatch}) => {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <div className={style.header}><Header/></div>
        <Navbar/>
        <div className={style.content}>
          <Route path='/profile'>
            <Profile
              ownerData={state.ownerData}
              posts={state.postsData}
              dispatch={dispatch}
            />
          </Route>
          <Route path='/messages'>
            <Messages chats={state.messagesData} dispatch={dispatch}/>
          </Route>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default App;
