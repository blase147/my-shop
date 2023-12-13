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
      <div className="luxury">
        <img src="https://www.thecoldwire.com/wp-content/uploads/2023/01/storage-black-leather-box-with-collection-of-men-wrist-watches.jpeg" alt="luxury watch" className="luxury_image" />
        <h2>Philip Patek</h2>
      </div>
      <FlashSale />
      <div className="luxury2">
        <div className="luxury2_image_cont">
          <img src="https://www.thecoldwire.com/wp-content/uploads/2023/01/storage-black-leather-box-with-collection-of-men-wrist-watches.jpeg" alt="luxury watch" className="luxury2_image" />
          <h2 className="luxury2_label1">Philip Patek</h2>
        </div>
        <div className="luxury2_image_cont">
          <img src="https://www.thecoldwire.com/wp-content/uploads/2023/01/storage-black-leather-box-with-collection-of-men-wrist-watches.jpeg" alt="luxury watch" className="luxury2_image" />
          <h2 className="luxury2_label2">Philip Patek</h2>
        </div>
      </div>
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
