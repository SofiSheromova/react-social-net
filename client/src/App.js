import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Mail from './components/Mail/Mail';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';

const App = ({ownerData, mailData}) => {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header/>
      </div>
      <div className={style.navbar}>
        <Navbar/>
      </div>
      <div className={style.content}>
        <Route path='/profile'>
          <Profile ownerData={ownerData}/>
        </Route>
        <Route path='/news'>
          <NewsContainer />
        </Route>
        <Route path='/messages'>
          <Mail dialogs={mailData}/>
        </Route>
        <Route path='/people'>
          <UsersContainer />
        </Route>
      </div>
      <Footer/>
    </div>
  );
};

App.propTypes = {
  ownerData: PropTypes.object.isRequired,
  mailData: PropTypes.array.isRequired,
};

export default App;
