import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Content/>
      <div className='App-empty'/>
      <Footer/>
    </div>
  );
};

export default App;
