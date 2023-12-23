import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './category.scss';
import { Link } from 'react-router-dom';

const ImageSlider = ({ defaultProducts }) => {
  const [sliderKey, setSliderKey] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    key: sliderKey,
  };

  useEffect(() => {
    setSliderKey((prevKey) => prevKey + 1);
  }, [defaultProducts]);

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
        {defaultProducts.map((image) => (
          <div key={image.id}>
            <Link to="/categories/">
              <img
                src={image.image}
                alt={image.alt}
                className="image_map"
              />
              <h3>{image.name}</h3>
              <div>
                <p>{image.stock}</p>
                {/* <p>Products available</p> */}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  defaultProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      product_image_url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired, // Corrected from 'inventory' to 'stock'
    }),
  ).isRequired,
};

export default ImageSlider;
