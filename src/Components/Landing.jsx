import React from 'react';
import falcon from '../Assets/falcon_emblem.jpg';

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Free Birds</h1>
      <img src={falcon} className='landing_logo' />
      <h1>Log in to view site</h1>
    </div>
  )
};

export default Landing;