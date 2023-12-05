import React from 'react';
import './blogNews.scss';
import ImageSlider from './ImageSlider';

const BlogNews = () => {
  const news = [
    {
      image:
        'https://similux-vinovatheme.myshopify.com/cdn/shop/articles/b-1_370x260_crop_center.jpg?v=1663814662',
      date: '21 SEPTEMBER 2022',
      author: 'CHUKWUMA MOSANYA',
      title: '5 Sweet Wrist Watches to treasure forever',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      image:
        'https://similux-vinovatheme.myshopify.com/cdn/shop/articles/b-1_370x260_crop_center.jpg?v=1663814662',
      date: '21 SEPTEMBER 2022',
      author: 'CHUKWUMA MOSANYA',
      title: '5 Sweet Wrist Watches to treasure forever',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
      image:
        'https://similux-vinovatheme.myshopify.com/cdn/shop/articles/b-1_370x260_crop_center.jpg?v=1663814662',
      date: '21 SEPTEMBER 2022',
      author: 'CHUKWUMA MOSANYA',
      title: '5 Sweet Wrist Watches to treasure forever',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
  ];

  return (
    <div className="blogNews">
      <h2 className="blogNews_label">Blog News</h2>
      <ImageSlider news={news} />
    </div>
  );
};

export default BlogNews;
