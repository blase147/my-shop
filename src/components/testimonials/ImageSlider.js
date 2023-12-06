import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonials.scss';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <div className="testimonials_slider">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        className="show_testimonials"
      >
        {images.map((testimonial) => (
          <div key={testimonial.id}>
            <p className="">{testimonial.rating}</p>
            <p className="">{testimonial.desc}</p>
            <h3>{testimonial.name}</h3>
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
      name: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageSlider;
