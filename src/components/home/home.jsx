import React from 'react';
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
import Luxury1 from '../luxury1/luxury1';
import Luxury2 from '../luxury2/luxury2';
import Item from '../myCart/item';

function Home() {
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
      <Luxury1 />
      <FlashSale />
      <Luxury2 />
      <CustomerFavourites />
      <Testimonials />
      <OurBrands />
      <Item />
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
