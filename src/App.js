import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer';

const App = () => {
  const [posts, setPosts] = React.useState([
    {id: 1, completed: false, title: 'How are you?'},
    {id: 2, completed: false, title: 'Hello, it is my first post!'},
  ]);

  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Content posts={posts} setPosts={setPosts}/>
      <div className='App-empty'/>
      <Footer/>
    </div>
  );
};

export default App;
