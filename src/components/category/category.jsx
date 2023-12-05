import React from 'react';
import ImageSlider from './ImageSlider';
import './category.scss';

const Category = () => {
  const images = [
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 1', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 2', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 3', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 4', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 5', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 6', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 7', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 8', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 9', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 10', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 11', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 12', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 13', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 14', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 15', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?74850', name: 'Image 16', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 17', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 18', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 19', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 20', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 21', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 22', stock: '126 Products' },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Image 23', stock: '126 Products' },
  ];

  return (
    <div className="category">
      <h2 className="category_label">Categories</h2>
      <ImageSlider images={images} />
    </div>
  );
};

export default Category;
