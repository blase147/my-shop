import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} style={{ color: 'green' }} />
  ));

  return <div>{stars}</div>;
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
