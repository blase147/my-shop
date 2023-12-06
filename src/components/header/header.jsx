import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import MyCart from '../myCart/myCart';
import '../myCart/myCart.scss';

const Header = () => {
  const HeaderItems = [
    { url: '/myAccount', icon: faUser },
    { url: '/myCart', icon: faShoppingCart },
    { url: '/myFavourites', icon: faHeart },
  ].filter(Boolean);

  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <div className="header">
      <ul>
        {HeaderItems.map(({ url, icon }) => (
          <li key={icon}>
            {url === '/myCart' ? (
              // If the link is for MyCart, open the modal on click
              <button type="button" onClick={openCartModal}>
                <FontAwesomeIcon icon={icon} size="2x" aria-label="My Cart" />
              </button>
            ) : (
              // Otherwise, use Link
              <Link to={url}>
                <FontAwesomeIcon icon={icon} size="2x" aria-label="My Cart" />
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Render the MyCart modal if it's open */}
      {isCartModalOpen && <MyCart onClose={closeCartModal} />}
    </div>
  );
};

export default Header;
