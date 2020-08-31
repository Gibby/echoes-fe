import React from 'react';
import falcon from '../Assets/falcon_emblem.jpg';

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Falcon Guard Alliance</h1>
      <img src={falcon} className='landing_logo' />
    </div>
  )
};

export default Landing;