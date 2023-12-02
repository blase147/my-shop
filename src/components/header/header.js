import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const HeaderItems = [
    { url: '/myCart', name: 'My Cart' },
    { url: '/myFavourites', name: 'My Favourites' },
  ].filter(Boolean);

  return (
    <div className="header">
      <div className="header_inner">
        <div className="header_title">
          <ul>
            {HeaderItems.map(({ url, name }) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
