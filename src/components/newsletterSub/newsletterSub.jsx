import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './newsletterSub.scss';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter_cont">
      <FaEnvelope className="newsletter_icon" size={100} />
      <h2>Signup for our newsletter</h2>
      <p>
        Be the first to know about sales, new product launches and exclusive
        offers!
      </p>
      <form>
        <input
          type="text"
          placeholder="&#x2709; Enter your email" // HTML entity for a magnifying glass
          style={{ border: 'none' }}
        />
        <button type="submit" id="newsletterhbtn" style={{ border: 'none' }}>
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export default Newsletter;
