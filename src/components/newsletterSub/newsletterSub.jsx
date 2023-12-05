import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './newsletterSub.scss';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter_cont">
      <FaEnvelope className="newsletter_icon" />
      <h2>Signup for our newsletter</h2>
      <p>
        Be the first to know about sales, new product launches and exclusive
        offers!
      </p>
      <div className="newsletter_form">
        <form>
          <input
            type="text"
            placeholder="&#128269; Search..." // HTML entity for a magnifying glass
            value="your email"
            style={{ border: 'none' }}
          />
          <button type="submit" id="newsletterhbtn" style={{ border: 'none' }}>
            &#128269;
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Newsletter;
