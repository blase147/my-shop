import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaCalendar, FaUser } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blogNews.scss';

const ImageSlider = ({ news }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className="blog_slider">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        cssEase={settings.cssEase}
      >
        {news.map((item, index) => (
          <div key={item.id} className="blogNews_cont">
            <div className="blogNews_card">
              <img src={item.image} alt={`News ${index + 1}`} className="blogNews_image" />
              <p className="date">
                <FaCalendar />
                {item.date}
                BY
                <FaUser />
                {item.author}
              </p>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <p className="readmore">Read more...</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.node.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
