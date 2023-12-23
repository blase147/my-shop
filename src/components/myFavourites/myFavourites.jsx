import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
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
import { removeItem } from '../../Redux/Reducers/favSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const MyFavourites = () => {
  const fav = useSelector((state) => state.fav?.fav);
  const dispatch = useDispatch();

  return (
    <>
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
            <>
              <div className="myFav_card" key={item.id}>
                <FavItem
                  id={item.id}
                  image={item.product_image_url}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  onRemove={() => dispatch(removeItem(item))}
                />
                <div className="myfav_addmorebtn">
                  <div>
                    <button
                      type="button"
                      onClick={() => dispatch(addToCart(fav))}
                    >
                      Add to cart
                    </button>
                  </div>
                  <FaTrash
                    className="trashbtn"
                    onClick={() => dispatch(removeItem(item))}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
      <CopyRight />
    </>
  );
};

// MyFavourites.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

export default MyFavourites;
