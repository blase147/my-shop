import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import Header from '../header/header';
import Logo from '../logo/logo';

const Menu = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Adjust the threshold as needed
      const showHeaderThreshold = windowHeight * 0.13;

      setIsHeaderVisible(scrollPosition < showHeaderThreshold);
      setIsHeaderVisible(scrollPosition > showHeaderThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { url: '/', name: 'Home' },
    { url: '/category', name: 'Category' },
    { url: '/contactUs', name: 'Contact Us' },
    { url: '/products', name: 'Products' },
    { url: '/blog', name: 'Blog' },
  ];

  return (
    <div className="menu menu_header">
      {isHeaderVisible && <Logo /> }
      <ul>
        {navLinks.map(({ url, name }) => (
          <li key={name}>
            <Link to={url}>{name}</Link>
          </li>
        ))}
      </ul>
      {isHeaderVisible && <Header /> }
    </div>
  );
};
export default Menu;
