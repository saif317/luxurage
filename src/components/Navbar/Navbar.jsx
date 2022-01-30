import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { logoNoBg } from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar--logo'>
        <img src={logoNoBg} alt='logo' />
      </div>
      <div className='app__navbar--links'>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#awards'>Awards</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='app__navbar--login'>
        <a href='#login'>Login / Register</a>
        <div />
        <a href='/'>Book Apointment</a>
      </div>
      <div className='app__navbar--smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar--smallscreen--overlay slide-in-top'>
            <AiFillCloseCircle
              fontSize={27}
              className='overlay_close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar--smallscreen--links'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#menu'>Menu</a>
              </li>
              <li>
                <a href='#awards'>Awards</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
