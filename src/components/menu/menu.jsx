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
  const [isProductsHovered, setisProductsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const showHeaderThreshold = windowHeight * 0.13;

      setIsHeaderVisible(scrollPosition < showHeaderThreshold);
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
    { url: '/products', name: 'Products', hasDropdown: true },
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
              onMouseEnter={() => {
                if (url === '/category') {
                  setIsCategoryHovered(true);
                  setisProductsHovered(false);
                } else if (url === '/products') {
                  setisProductsHovered(true);
                  setIsCategoryHovered(false);
                }
              }}
              onMouseLeave={() => {
                if (url === '/category') {
                  setIsCategoryHovered(false);
                } else if (url === '/products') {
                  setisProductsHovered(false);
                }
              }}
            >
              {hasDropdown ? (
                <>
                  <Link to={url}>{name}</Link>
                  {url === '/category' && isCategoryHovered && (
                    <div className="dropdown">
                      <div className="dropdown_cont">
                        <Link to="/men">Mens</Link>
                        <Link to="/women">Womens</Link>
                        <Link to="/children">Children</Link>
                        <Link to="/babies">Babies</Link>
                      </div>
                      <div className="featured_category">
                        <h3>Featured Category</h3>
                        <img
                          src="https://baajoo.com/wp-content/uploads/2023/05/MTP-VD200G-1B-000.jpg"
                          alt="featured product"
                          className="featured_category_image"
                        />
                      </div>
                    </div>
                  )}
                  {url === '/products' && isProductsHovered && (
                    <div className="dropdown">
                      <div className="dropdown_cont">
                        <Link to="/leather_watches">Leather Watches</Link>
                        <Link to="/necklaces">Necklaces</Link>
                        <Link to="/gold_watches">Gold Watches</Link>
                        <Link to="/digital_bangles">Digital Bangles</Link>
                      </div>
                      <div className="featured_category">
                        <h3>Featured Products</h3>
                        <img
                          src="https://baajoo.com/wp-content/uploads/2023/05/MTP-VD200G-1B-000.jpg"
                          alt="featured product"
                          className="featured_category_image"
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
