import React from 'react';
import CreditCardLogos from './creditCardLogos';
import './copyright.scss';

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <div className="copyright_cont">
        <div className="copyright_text">
          <p>Copyright &copy;</p>

          <p>{currentYear}</p>
          <p>Firmtecs. All Rights Reserved.</p>
        </div>
        <CreditCardLogos />
      </div>
    </div>
  );
};

export default CopyRight;
