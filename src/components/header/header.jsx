import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import MyCart from '../myCart/myCart';
import '../myCart/myCart.scss';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    if (Array.isArray(cart.cart)) {
      cart.cart.forEach((item) => {
        total += item.quantity;
      });
    }
    return total;
  };
    // const getTotalAmount = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     total += (item.quantity * item.price)
  //   })
  //   return total
  // }

  const HeaderItems = [
    { url: '/myAccount', icon: faUser },
    { url: '/myCart', icon: faShoppingCart },
    { url: '/myFavourites', icon: faHeart },
  ].filter((item) => item); // Use filter(item => item.url) instead of filter(Boolean)

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
            {url === '/myCart' && (
              <button type="button" onClick={openCartModal}>
                <FontAwesomeIcon icon={icon} size="2x" aria-label="My Cart" />
                <p className="cart_no_home">
                  {getTotalQuantity() || 0}
                </p>
              </button>
            )}

            {url === '/myAccount' && (
              <button type="button">
                <FontAwesomeIcon icon={icon} size="2x" aria-label="Favourites" />
              </button>
            )}
            {url === '/myFavourites' && (
              <Link to={url}>
                <FontAwesomeIcon icon={icon} size="2x" aria-label="Favourites" />
                <p className="favourites_counter">17</p>
              </Link>
            )}
            {url !== '/myCart' && url !== '/myFavourites' && url !== '/myAccount' && (
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
