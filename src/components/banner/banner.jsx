import React from 'react';
import ImageSlider from './ImageSlider';
import './banner.scss';

const Banner = () => {
  const images = [
    {
      image: 'https://placekitten.com/800/400', major_desc: 'Image 1', minor_desc: '126 Products', button: 'Shop Now',
    },
    {
      image: 'https://placekitten.com/802/400', major_desc: 'Image 2', minor_desc: '126 Products', button: 'Shop Now',
    },
    {
      image: 'https://placekitten.com/803/400', major_desc: 'Image 3', minor_desc: '126 Products', button: 'Shop Now',
    },
    {
      image: 'https://placekitten.com/804/400', major_desc: 'Image 4', minor_desc: '126 Products', button: 'Shop Now',
    },
  ];
  return (
    <div className="banner">
      <ImageSlider images={images} />
    </div>
  );
};

export default Banner;
