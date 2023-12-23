import React from 'react';
import './viewCart.scss';
import { useSelector } from 'react-redux';
import ViewCartItem from './viewCartItem';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Menu from '../menu/menu';
import Newsletter from '../newsletterSub/newsletterSub';
import CopyRight from '../copyright/copyright';
import Footer from '../footer/footer';

const ViewCart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="viewCart">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />

      <div className="viewCart_cont">
        <div className="viewCart_card">
          {Array.isArray(cart)
          && cart.map((item) => (
            <ViewCartItem
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

export default ViewCart;
