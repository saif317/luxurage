import React from 'react';

import './SubHeading.css';

const SubHeading = ({ title }) => {
  return (
    <div className='app__subheading'>
      <div className='app__subheading-p'>
        <p>{title}</p>
      </div>
      <div className='app__subheading-separator' />
    </div>
  );
};

export default SubHeading;
