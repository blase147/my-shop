import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './flashSale.scss';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="flash_sale_slider">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt={image.alt} className="image_map" />
            <h3>{image.name}</h3>
            <p>{image.stock}</p>
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
      name: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
