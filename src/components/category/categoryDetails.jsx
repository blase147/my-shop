import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import './categoryDetails.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="categoryDetails">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />
      <h2>Caetogories</h2>
      <div className="categoryDetails_cont">
        {products.map((product) => (
          <div className="categoryDetails_card" key={product.id}>
            <img
              src={product.product_image_url}
              alt={product.name}
              className="categoryDetails_image"
            />
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
            <button type="button" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Newsletter />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default CategoryDetails;
