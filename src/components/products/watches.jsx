import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import './watches.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const Watches = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Check if products are not empty before filtering
  const watches = products ? products.filter((product) => product.product_type === 'Watch') : [];

  return (
    <div className="watches">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />
      <h2>Watches Collection</h2>
      <div className="watches_cont">
        {watches.map((product) => (
          <div className="watches_card" key={product.id}>
            <img
              src={product.product_image_url}
              alt={product.name}
              className="watches_image"
            />
            <div className="name_cart">
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <button
                type="button"
                onClick={() => dispatch(addToCart(product))}
                className="cart_btn"
              >
                Add to Cart
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

export default Watches;
