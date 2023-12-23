import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.scss';

const ImageSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className="banner_slider">
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
        {products.map((image) => (
          <div key={image.id}>
            <img src={image.product_image_url} alt={image.product_image} />
            <div className="image_desc">
              <h3>{image.name}</h3>
              <p>{image.description}</p>
              <button type="button" className="shopbtn">Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      major_desc: PropTypes.string.isRequired,
      minor_desc: PropTypes.string.isRequired,
      button: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
