import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Goal from './icons/goal';
import Playbook from './icons/playbook';
import Me from './icons/me';

class Navbar extends Component {
  render() {
    const { location } = this.props;
    const goalClass = location.pathname === '/' ? true : false;
    const playbookClass = location.pathname === '/plans' ? true : false;
    const meClass = location.pathname === '/me' ? true : false;
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              <Goal active={goalClass} />
            </NavLink>
          </li>
          <li>
            <NavLink to='/plans' activeClassName='active'>
              <Playbook active={playbookClass} />
            </NavLink>
          </li>
          <li>
            <NavLink to='/me' activeClassName='active'>
              <Me active={meClass} />
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navbar);
