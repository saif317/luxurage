import React from 'react';
import { SubHeading } from '../../components';
import { logo } from '../../constants/images';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='info'>
      <div className='app__wrapper_info'>
        <SubHeading title='subheading title' />
        <h1 className='app__header-h1'>app header h1 app header h1</h1>
        <p className='app__header-p p__opensans' style={{ margin: '2rem 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className='custom__button'>custom button</button>
      </div>
      <div className='app__header-img'>
        <img src={logo} alt='header' />
      </div>
    </div>
  );
};

export default Header;
