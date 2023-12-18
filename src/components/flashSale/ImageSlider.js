import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './flashSale.scss';
import Item from '../myCart/item';

const ImageSlider = ({ products }) => {
  const [hover, setHover] = useState(false);

  const handleOnHover = () => {
    setHover(true);
  };

  const handleOnBlur = () => {
    setHover(false);
  };

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
        {products.map((product) => (
          <>
            <div
              key={product.id}
              className="product-slide"
              onMouseEnter={handleOnHover}
              onMouseLeave={handleOnBlur}
            >
              <img
                src={product.product_image_url}
                alt={product.alt}
                className={`image_map ${hover ? 'showAddToCart' : ''}`}
              />
              <div>{hover && <button type="button">Add to cart</button>}</div>
              <h3>{product.name}</h3>
              <p>
                $
                {product.price}
              </p>
            </div>
            <Item />
          </>
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
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
