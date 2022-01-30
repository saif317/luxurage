import React, { useState, useEffect } from 'react';
import { SubHeading } from '../../components';
import { logo, banner } from '../../constants/images';

import './Header.css';

const getScreenWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getScreenWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenWidth;
};

const Header = () => {
  const width = useScreenWidth();

  return (
    <div className='app__header'>
      <div className='app__header--info'>
        <SubHeading title='subheading title' />
        <div className='app__header--h1'>
          <h1>app header h1 app header h1</h1>
        </div>
        <p className='app__header--p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <button className='app__header--btn'>custom button</button>
      </div>
      <div className='app__header--img'>
        {width <= 960 ? (
          <img src={banner} alt='header' />
        ) : (
          <img src={logo} alt='header' />
        )}
      </div>
    </div>
  );
};

export default Header;
