import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import Header from '../header/header';
import Category from '../category/category';
import Search from '../search/search';
import Newsletter from '../newsletterSub/newsletterSub';
import CopyRight from '../copyright/copyright';
import CustomerFavourites from '../customerFavourites/customerFavourites';
import Testimonials from '../testimonials/testimonials';
import OurBrands from '../ourBrands/ourBrands';
import ShopGallery from '../shopGallery/shopGallery';
import FlashSale from '../flashSale/flashSale';
import BlogNews from '../blogNews/blogNews';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import './home.scss';
import Services from '../services/services';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const renderLuxuryImages1 = () => {
    const luxuryImages = [];

    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];

      if (product.price > 500) {
        luxuryImages.push(
          <div key={product.id}>
            <img src={product.product_image_url} alt={product.name} className="luxury_image" />
            <h2>{product.name}</h2>
          </div>,
        );
      }
    }

    return luxuryImages;
  };
  const renderLuxuryImages2 = () => {
    const luxuryImages = [];

    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];

      if (product.price <= 500) {
        luxuryImages.push(
          <div key={product.id}>
            <img src={product.product_image_url} alt={product.name} className="luxury_image" />
            <h2>{product.name}</h2>
          </div>,
        );
      }
    }

    return luxuryImages;
  };

  return (
    <div className="Home">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu />
      <Banner />
      <Category />
      <Services />
      <div className="luxury">{renderLuxuryImages1()}</div>
      <FlashSale />
      <div className="luxury2">{renderLuxuryImages2()}</div>
      <CustomerFavourites />
      <Testimonials />
      <OurBrands />
      <hr />
      <ShopGallery />
      <hr />
      <BlogNews />
      <Newsletter />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default Home;
