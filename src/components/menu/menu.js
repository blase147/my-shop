import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  const navLinks = [
    { url: '/', name: 'Home' },
    { url: '/category', name: 'Category' },
    { url: '/contactUs', name: 'Contact Us' },
    { url: '/products', name: 'Products' },
  ].filter(Boolean);

  return (
    <div className="menu">
      <div className="header_title">
        <ul>
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
