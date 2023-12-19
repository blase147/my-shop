import React from 'react';
import './checkOut.scss';
import { useSelector } from 'react-redux';
import CheckOutItem from './checkOutItem';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Menu from '../menu/menu';
import Newsletter from '../newsletterSub/newsletterSub';
import CopyRight from '../copyright/copyright';
import Footer from '../footer/footer';

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="checkOut">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />

      <div className="checkOut_cont">
        <div className="checkOut_card">
          {Array.isArray(cart)
          && cart.map((item) => (
            <CheckOutItem
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
      <Newsletter />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default CheckOut;
