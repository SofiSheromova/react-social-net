import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = React.useState([
    {id: 1, completed: false, title: 'How are you?'},
    {id: 2, completed: false, title: 'Hello, it is my first post!'},
  ]);

  const [users, setUsers] = React.useState([
    {id: 1, name: 'Sofi', messages: [{content: 'Hello'}]},
    {id: 2, name: 'Sam', messages: []},
    {id: 3, name: 'Juli', messages: [{content: 'How are you?'}]},
  ]);

  return (
    <div className={style.App}>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <div className={style.content}>
          <Route path='/profile'>
            <Profile posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path='/messages'>
            <Messages setUsers={setUsers} users={users}/>
          </Route>
        </div>
        <div className={style.empty}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
