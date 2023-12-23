import React from 'react';
import { FaTruck, FaCreditCard, FaUndo } from 'react-icons/fa';
import './services.scss';

const Services = () => (
  <div className="services">
    <div className="services_title">
      <FaTruck size={80} style={{ marginTop: '20px' }} />
      <div>
        <h2>FREE US DELIVERY</h2>
        <p>Free Delivery on all US orders over $70</p>
        <p>Learn more...</p>
      </div>
    </div>
    <div className="services_title">
      <FaCreditCard size={80} style={{ marginTop: '20px' }} />
      <div>
        <h2>CREDIT CARD</h2>
        <p>Secured Payment Visa, MasterCard</p>
        <p>Learn more...</p>
      </div>
    </div>
    <div className="services_title">
      <FaUndo size={80} style={{ marginTop: '20px' }} />
      <div>
        <h2>30 DAYS RETURN</h2>
        <p>Money Back Guarantee</p>
        <p>Learn more...</p>
      </div>
    </div>
  </div>
);

export default Services;
