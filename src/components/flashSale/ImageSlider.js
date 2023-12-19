// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './flashSale.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const ImageSlider = ({ products }) => {
  // const [hover, setHover] = useState(false);

  // const handleOnHover = () => {
  //   setHover(true);
  // };

  // const handleOnBlur = () => {
  //   setHover(false);
  // };
  const dispatch = useDispatch();

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
          <div
            key={product.id}
            className="product-slide"
            // onMouseEnter={handleOnHover}
            // onMouseLeave={handleOnBlur}
          >
            <img
              src={product.product_image_url}
              alt={product.alt}
              className="product-image"
            />
            <div><button type="button" onClick={() => dispatch(addToCart(product))}>Add to cart</button></div>
            <Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
            <p>
              $
              {product.price}
            </p>
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
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
