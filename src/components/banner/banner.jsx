import React from 'react';
import ImageSlider from './ImageSlider';
import './banner.scss';

const Banner = () => {
  const images = [
    {
      image: 'https://placekitten.com/800/400', major_desc: 'Classic Wears ', minor_desc: 'Original and Stylish', button: <button type="button">Shop Now</button>,
    },
    {
      image: 'https://placekitten.com/802/400', major_desc: 'Pecky Vintage', minor_desc: 'Your style , your choice', button: <button type="button">Shop Now</button>,
    },
    {
      image: 'https://placekitten.com/803/400', major_desc: 'Gold Plated', minor_desc: 'Original Diamond', button: <button type="button">Shop Now</button>,
    },
    {
      image: 'https://placekitten.com/804/400', major_desc: 'Over rated', minor_desc: 'Dandies and Hotties Goals', button: <button type="button">Shop Now</button>,
    },
  ];
  return (
    <div className="banner">
      <ImageSlider images={images} />
    </div>
  );
};

export default Banner;
