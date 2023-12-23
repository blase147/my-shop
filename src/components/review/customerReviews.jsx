import React from 'react';
import './customerReviews.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const CustomerReviews = () => (
  <div className="customer_reviews">
    <div id="filter">
      <select name="sort" id="sort">
        Most Recent
        <option value="most_recent">Most Recent</option>
        <option value="most_helpful">Most Helpful</option>
        <option value="most_positive">Most Positive</option>
        <option value="most_critical">Most Critical</option>
      </select>
    </div>
    <div className="customer_reviews__cont">
      <div className="review_info">
        <div className="reviewer__image">
          <FontAwesomeIcon className="heart_icon" icon={faUser} />
        </div>
        <div className="reviewer__name">John Doe</div>
        <div className="reviewer__rating">rating</div>
        <div className="review__date">12/12/2019</div>
      </div>
      <div className="review_subject">
        <div className="review__title">
          <h3>review title</h3>
        </div>
        <div className="review__subject">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quos, quas, voluptatem voluptatum quia aperiam quibusdam
            doloremque voluptas voluptate quod. Quisquam voluptates, quos, quas,
            voluptatem voluptatum quia aperiam quibusdam doloremque voluptas
            voluptate quod.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerReviews;
