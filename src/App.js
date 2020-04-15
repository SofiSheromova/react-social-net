import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Profile/>
      <div className='App-empty'/>
      <Footer/>
    </div>
  );
};

export default App;
