import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.item} to='/profile'>Profile</NavLink>
      <NavLink className={style.item} to='/messages'>Messages</NavLink>
      <NavLink className={style.item} to='/news'>News</NavLink>
      <NavLink className={style.item} to='/music'>Music</NavLink>
      <NavLink className={style.item} to='/people'>People</NavLink>
    </nav>
  );
};

export default Navbar;
