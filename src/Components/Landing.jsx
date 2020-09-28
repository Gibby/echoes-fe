import React from 'react';
import wallet from '../Assets/wallet.png';

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Free Birds</h1>
      <img src={wallet} className='landing_logo' />
    </div>
  )
};

export default Landing;