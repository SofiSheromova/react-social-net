import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({postsData, usersData, ownerData}) => {
  const [posts, setPosts] = React.useState(postsData);
  const [users, setUsers] = React.useState(usersData);

  return (
    <div className={style.App}>
      <BrowserRouter>
        <div className={style.header}><Header/></div>
        <Navbar/>
        <div className={style.content}>
          <Route path='/profile'>
            <Profile posts={posts} setPosts={setPosts} ownerData={ownerData}/>
          </Route>
          <Route path='/messages'>
            <Messages setUsers={setUsers} users={users}/>
          </Route>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  postsData: PropTypes.array.isRequired,
  usersData: PropTypes.array.isRequired,
  ownerData: PropTypes.object.isRequired,
};

export default App;
