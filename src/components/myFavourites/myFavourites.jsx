import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import FavItem from './favItem';
import './myFavourites.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const MyFavourites = () => {
  const fav = useSelector((state) => state.fav.fav);

  return (
    <div className="myfav">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />

      <h2>My Favourites</h2>
      <div className="myfav_cont">
        <div className="myfav_card">
          <div className="products_cont">
            {Array.isArray(fav)
              && fav.map((item) => (
                <FavItem
                  key={item.id}
                  id={item.id}
                  image={item.product_image_url}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default MyFavourites;

// MyFavourites.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
