import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  const HeaderItems = [
    { url: '/myAccount',  icon: faUser },
    { url: '/myCart',  icon: faShoppingCart },
    { url: '/myFavourites',  icon: faHeart },
  ].filter(Boolean);

  return (
    <div className="header">
      <ul>
        {HeaderItems.map(({ url, icon }) => (
          <li key={icon}>
            <Link to={url}>
              <FontAwesomeIcon icon={icon} size='2x'/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
