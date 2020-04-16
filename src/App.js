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

  const [messages, setMessages] = React.useState([
    {id: 1, content: 'Hello'},
    {id: 2, content: 'What is yor name?'},
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
            <Messages setMessages={setMessages} messages={messages}/>
          </Route>
        </div>
        <div className={style.empty}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
