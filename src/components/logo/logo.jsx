import React from 'react';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logo_cont">
      <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Logo" className="logo_image" />
    </div>
  );
};

export default Logo;
