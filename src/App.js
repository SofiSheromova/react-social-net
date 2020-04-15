import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Profile/>
      <div className='App-empty'/>
    </div>
  );
};

export default App;
