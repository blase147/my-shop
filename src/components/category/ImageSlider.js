import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './category.scss';

const ImageSlider = ({ products }) => {
  const [sliderKey, setSliderKey] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    key: sliderKey,
  };

  useEffect(() => {
    setSliderKey((prevKey) => prevKey + 1);
  }, [products]);

  return (
    <div className="full-screen-slider">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        key={settings.key}
      >
        {products.map((image) => (
          <div key={image.id}>
            <img src={image.product_image_url} alt={image.alt} className="image_map" />
            <h3>{image.name}</h3>
            <p>{image.inventory}</p>
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
      product_image_url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      inventory: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
