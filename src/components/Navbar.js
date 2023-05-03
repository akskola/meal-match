import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          MealMatch
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/invite'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Invite
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/currentdate'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Current Date
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/history'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Date History
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Log Out
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
