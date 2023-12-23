import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import Header from '../header/header';
import Logo from '../logo/logo';
import '../myCart/myCart.scss';
import '../header/header.scss';

const Menu = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoryDetailsHovered, setIsCategoryDetailsHovered] = useState(false);
  const [isProductsHovered, setisProductsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const showHeaderThreshold = windowHeight * 0.1;

      setIsHeaderVisible(scrollPosition < showHeaderThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { url: '/', name: 'Home' },
    { url: '/categoryDetails', name: 'Category', hasDropdown: true },
    { url: '/products', name: 'Products', hasDropdown: true },
    { url: '/contactUs', name: 'Contact Us' },
    { url: '/blog', name: 'Blog' },
  ];

  return (
    <div className="menu">
      <div className="menu_cont">
        <div className="menu_logo">{isHeaderVisible && <Logo />}</div>
        <ul>
          {navLinks.map(({ url, name, hasDropdown }) => (
            <li
              key={name}
              onMouseEnter={() => {
                if (url === '/categoryDetails') {
                  setIsCategoryDetailsHovered(true);
                  setisProductsHovered(false);
                } else if (url === '/products') {
                  setisProductsHovered(true);
                  setIsCategoryDetailsHovered(false);
                }
              }}
              onMouseLeave={() => {
                if (url === '/categoryDetails') {
                  setIsCategoryDetailsHovered(false);
                } else if (url === '/products') {
                  setisProductsHovered(false);
                }
              }}
            >
              {hasDropdown ? (
                <>
                  <Link to={url}>{name}</Link>
                  {url === '/categoryDetails' && isCategoryDetailsHovered && (
                    <div className="dropdown">
                      <div className="dropdown_cont">
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/luxuryDetails">Luxury</Link>
                      </div>
                      <div className="featured_categoryDetails">
                        <h3>Featured</h3>
                        <img
                          src="https://baajoo.com/wp-content/uploads/2023/05/MTP-VD200G-1B-000.jpg"
                          alt="featured product"
                          className="featured_categoryDetails_image"
                        />
                      </div>
                    </div>
                  )}
                  {url === '/products' && isProductsHovered && (
                    <div className="dropdown">
                      <div className="dropdown_cont">
                        <Link to="/jewelries">Jewelries</Link>
                        <Link to="/watches">Watches</Link>
                        <Link to="/belts">Belts</Link>
                        <Link to="/glasses">Glasses</Link>
                      </div>
                      <div className="featured_categoryDetails">
                        <h3>Featured Products</h3>
                        <img
                          src="https://baajoo.com/wp-content/uploads/2023/05/MTP-VD200G-1B-000.jpg"
                          alt="featured product"
                          className="featured_categoryDetails_image"
                        />
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
