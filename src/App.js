import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

const App = () => {
  const [posts, setPosts] = React.useState([
    {id: 1, completed: false, title: 'How are you?'},
    {id: 2, completed: false, title: 'Hello, it is my first post!'},
  ]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <div className='profile'>
          <Route path='/profile'>
            <Profile posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path='/messages'>
            <Messages setMessages={undefined} messages={[]}/>
          </Route>
        </div>
        <div className='App-empty'/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
