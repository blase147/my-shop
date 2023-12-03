import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  const navLinks = [
    { url: '/', name: 'Home' },
    { url: '/category', name: 'Category' },
    { url: '/contactUs', name: 'Contact Us' },
    { url: '/products', name: 'Products' },
    { url: '/blog', name: 'Blog' },
  ].filter(Boolean);

  return (
    <div className="menu">
      <ul>
        {navLinks.map(({ url, name }) => (
          <li key={name}>
            <Link to={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
