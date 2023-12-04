import React from 'react';
import ImageSlider from './ImageSlider';
import './category.scss';

const Category = () => {
  const images = [
    { image: 'https://placekitten.com/800/400', name: 'Image 1', stock: '126 Products' },
    { image: 'https://placekitten.com/802/400', name: 'Image 2', stock: '126 Products' },
    { image: 'https://placekitten.com/803/400', name: 'Image 3', stock: '126 Products' },
    { image: 'https://placekitten.com/804/400', name: 'Image 4', stock: '126 Products' },
    { image: 'https://placekitten.com/805/400', name: 'Image 5', stock: '126 Products' },
    { image: 'https://placekitten.com/806/400', name: 'Image 6', stock: '126 Products' },
    { image: 'https://placekitten.com/807/400', name: 'Image 7', stock: '126 Products' },
    { image: 'https://placekitten.com/808/400', name: 'Image 8', stock: '126 Products' },
    { image: 'https://placekitten.com/809/400', name: 'Image 9', stock: '126 Products' },
    { image: 'https://placekitten.com/810/400', name: 'Image 10', stock: '126 Products' },
    { image: 'https://placekitten.com/811/400', name: 'Image 11', stock: '126 Products' },
    { image: 'https://placekitten.com/812/400', name: 'Image 12', stock: '126 Products' },
    { image: 'https://placekitten.com/813/400', name: 'Image 13', stock: '126 Products' },
    { image: 'https://placekitten.com/814/400', name: 'Image 14', stock: '126 Products' },
    { image: 'https://placekitten.com/815/400', name: 'Image 15', stock: '126 Products' },
    { image: 'https://placekitten.com/816/400', name: 'Image 16', stock: '126 Products' },
    { image: 'https://placekitten.com/817/400', name: 'Image 17', stock: '126 Products' },
    { image: 'https://placekitten.com/818/400', name: 'Image 18', stock: '126 Products' },
    { image: 'https://placekitten.com/819/400', name: 'Image 19', stock: '126 Products' },
    { image: 'https://placekitten.com/820/400', name: 'Image 20', stock: '126 Products' },
    { image: 'https://placekitten.com/821/400', name: 'Image 21', stock: '126 Products' },
    { image: 'https://placekitten.com/822/400', name: 'Image 22', stock: '126 Products' },
    { image: 'https://placekitten.com/823/400', name: 'Image 23', stock: '126 Products' },
  ];

  return (
    <div className="category">
      <h2 className="category_label">Categories</h2>
      <ImageSlider images={images} />
    </div>
  );
};

export default Category;
