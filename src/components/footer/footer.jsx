import React from 'react';
import './footer.scss';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <div className="footer_cont">
      <div className="footer_item">
        <h3>CUSTOMER CARE</h3>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Track Order</li>
          <li>Size Guide</li>
          <li>Accessibility</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer_item">
        <h3>HELP AND SUPPORT</h3>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Track Order</li>
          <li>Size Guide</li>
          <li>Accessibility</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer_item">
        <h3>COMPANY INFO</h3>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Track Order</li>
          <li>Size Guide</li>
          <li>Accessibility</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer_item">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3jWRrafhO7M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="social_icons_cont">
          <h4>Follow us</h4>
          <div className="social_icons">
            <a href="https://www.facebook.com" aria-hidden="true">
              <FaFacebook className="social_icon" size={20} />
            </a>
            <a href="https://www.linkedin.com" aria-hidden="true">
              <FaLinkedin className="social_icon" size={20} />
            </a>
            <a href="https://www.twitter.com" aria-hidden="true">
              <FaTwitter className="social_icon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
