import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import './belts.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const Belts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Check if products are not empty before filtering
  const belts = products ? products.filter((product) => product.product_type === 'Belt') : [];

  return (
    <div className="belts">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />
      <h2>Belts Collection</h2>
      <div className="belts_cont">
        {belts.map((product) => (
          <div className="belts_card" key={product.id}>
            <img
              src={product.product_image_url}
              alt={product.name}
              className="belts_image"
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

export default Belts;
