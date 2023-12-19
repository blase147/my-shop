import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import { addToFav } from '../../Redux/Reducers/favSlice';
import './products.scss';
import Header from '../header/header';
import Menu from '../menu/menu';
import Newsletter from '../newsletterSub/newsletterSub';
import CopyRight from '../copyright/copyright';
import Logo from '../logo/logo';
import Search from '../search/search';
import Footer from '../footer/footer';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="products">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />

      <h2>Products</h2>
      <div>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && (
          <div className="products_cont">
            {products.map((product) => (
              <>
                <div className="products_card" key={product.id}>
                  <div className="product_image">
                    {product.product_image_url && (
                      <img
                        className="product_image"
                        src={product.product_image_url}
                        alt={product.name}
                      />
                    )}
                  </div>
                  <h3 className="name">
                    <Link to={`/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="price">
                    $
                    {product.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(addToFav(product))}
                  >
                    Add to Favourites
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Products;
