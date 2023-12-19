import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import FavItem from './favItem';
import './myFavourites.scss';
import './favItem.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';
import { addToCart, removeItem } from '../../Redux/Reducers/cartSlice';
import { FaTrash } from 'react-icons/fa';

const MyFavourites = () => {
  const fav = useSelector((state) => state.fav?.fav);
  const dispatch = useDispatch();
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
        {Array.isArray(fav)
          && fav.map((item) => (
            <div className="myFav_card">
              <FavItem
                key={item.id}
                id={item.id}
                image={item.product_image_url}
                name={item.name}
                desc={item.description}
                price={item.price}
                quantity={item.quantity}
              />
              <div className="myfav_addmorebtn">
                <FaTrash
                  className="trashbtn"
                  onClick={() => dispatch(removeItem(item))}
                />
              </div>

              <div>
                <button type="button" onClick={() => dispatch(addToCart(item))}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
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
