import React from 'react';

import './SubHeading.css';

const SubHeading = ({ title }) => {
  return (
    <div className='app__subheading'>
      <p className='p__lato'>{title}</p>
    </div>
  );
};

export default SubHeading;
