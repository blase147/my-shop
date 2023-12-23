import React from 'react';
import './customerReview.scss';
import ReviewRatings from './reviewRatings';
import CustomerReviews from './customerReviews';

const CustomerReview = () => (
  <div className="review">
    <h2>Customer Reviews</h2>
    <div className="review_cont">
      <div className="review_ratings__form_cont">
        <div className="review_ratings_cont">
          <ReviewRatings />
        </div>
        <div className="review_cont__form">
          <form>
            <strong>RATING</strong>
            <div className="review_cont__form__input">
              <label htmlFor="review_title">
                Review Title
                <input
                  type="text"
                  id="review_title"
                  name="review_title"
                  placeholder="GIVE YOUR REVIEW A TITLE"
                />
              </label>
            </div>
            <div className="review_cont__form__input">
              <label htmlFor="review">
                Review
                <textarea
                  id="review"
                  name="review"
                  placeholder="WRITE YOUR COMMENTS HERE"
                />
              </label>
            </div>
            <div className="review_cont__form__input">
              <label htmlFor="youtube">
                YouTube URL
                <input
                  type="text"
                  id="youtube"
                  name="youtube"
                  placeholder="ENTER YOUTUBE URL"
                />
              </label>
            </div>
            <div className="review_cont__form__input">
              <label htmlFor="file">
                Picture/Video(Optional)
                <input type="file" id="file" name="file" />
              </label>
            </div>
            <div className="review_cont__form__input">
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ENTER YOUR NAME(PUBLIC)"
                />
              </label>
            </div>
            <div className="review_cont__form__input">
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ENTER YOUR EMAIL(PRIVATE)"
                />
              </label>
            </div>
            <p>
              How we use your data: We will only contact you about the review
              you left, and only if necessary. By submitting your review, you
              agree to our terms and conditions and privacy policy.
            </p>
            <div className="review_cont__form__input">
              <input id="submit" type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
      <div className="customer_review_cont">
        <CustomerReviews />
      </div>
    </div>
  </div>
);

export default CustomerReview;
