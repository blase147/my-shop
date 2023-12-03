import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';

const Banner = () => {
  const images = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  )}

export default Banner;
