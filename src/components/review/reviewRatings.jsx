import React from 'react';
import './reviewRatings.scss';

const ReviewRatings = () => (
  <div className="review_rating">
    <div className="review_rating_cont">
      <div className="review_rating__rating">5</div>
      <div className="review_rating__rating">4</div>
      <div className="review_rating__rating">3</div>
      <div className="review_rating__rating">2</div>
      <div className="review_rating__rating">1</div>
    </div>
    <button type="button">CANCEL REVIEW</button>
  </div>
);

export default ReviewRatings;
