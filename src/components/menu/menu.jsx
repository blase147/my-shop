import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import Header from '../header/header';
import Logo from '../logo/logo';
import '../myCart/myCart.scss';

const Menu = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

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
    { url: '/#', name: 'Category', hasDropdown: true },
    { url: '/contactUs', name: 'Contact Us' },
    { url: '/products', name: 'Products' },
    { url: '/blog', name: 'Blog' },
  ];

  return (
    <div className="menu menu_header">
      {isHeaderVisible && <Logo />}
      <ul>
        {navLinks.map(({ url, name, hasDropdown }) => (
          <li
            key={name}
            onMouseEnter={() => setIsCategoryHovered(true)}
            onMouseLeave={() => setIsCategoryHovered(false)}
          >
            {hasDropdown ? (
              <>
                <Link to={url}>{name}</Link>
                {isCategoryHovered && (
                  <div className="dropdown">
                    <Link to="/subcategory1">Subcategory 1</Link>
                    <Link to="/subcategory2">Subcategory 2</Link>
                  </div>
                )}
              </>
            ) : (
              <Link to={url}>{name}</Link>
            )}
          </li>
        ))}
      </ul>
      {isHeaderVisible && <Header />}
    </div>
  );
};

export default Menu;
