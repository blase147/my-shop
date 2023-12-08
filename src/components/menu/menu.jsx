import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import Header from '../header/header';
import Logo from '../logo/logo';
import '../myCart/myCart.scss';
import '../header/header.scss';

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
    <div className="menu">
      <div className="menu_logo">{isHeaderVisible && <Logo />}</div>
      <div className="menu_cont">
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
                      <div className="dropdown_cont">
                        <Link to="/m">Mens</Link>
                        <Link to="/mens">Womens</Link>
                        <Link to="/subcategory1">Children</Link>
                        <Link to="/subcategory1">Babies</Link>
                      </div>
                      <div className="featured_category">
                        <h3>Featured Category</h3>
                        <img src="https://baajoo.com/wp-content/uploads/2023/05/MTP-VD200G-1B-000.jpg" alt="featured product" className="featured_category_image" />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link to={url}>{name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="menu_header">{isHeaderVisible && <Header />}</div>
    </div>
  );
};

export default Menu;
