import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar'>
    <ul>
      <li><NavLink exact activeClassName='active' to='/'>Goals</NavLink></li>
      <li><NavLink to='/plans' activeClassName='active'>Plans</NavLink></li>
      <li><NavLink to='/me' activeClassName='active'>Me</NavLink></li>
    </ul>
  </nav>
)

export default Navbar;
