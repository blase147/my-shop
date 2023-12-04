import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.scss';

const ImageSlider = ({ images }) => {
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
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt={image.alt} />
            <div className="image_desc">
              <h3>{image.major_desc}</h3>
              <p>{image.minor_desc}</p>
              <div className="shopbtn">{image.button}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
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
