import React from 'react';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';
import Header from '../header/header';
import Category from '../category/category';
import Search from '../search/search';
import Collection from '../collection/collection';
import ContactUs from '../contactUs/contactUs';
import CustomerFavourites from '../customerFavourites/customerFavourites';
import MyCart from '../myCart/myCart';
import Product from '../product/product';
import Products from '../products/products';
import Testimonials from '../testimonials/testimonials';
import Newsletter from '../newsletterSub/newsletterSub';
import OurBrands from '../ourBrands/ourBrands';
import ShopGallery from '../shopGallery/shopGallery';
import Checkout from '../checkout/checkout';
import Login from '../login/login';
import Register from '../register/register';
import FlashSale from '../flashSale/flashSale';
import FeaturedProducts from '../featuredProduct/featuredProducts';
import BlogNews from '../blogNews/blogNews';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import './home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="search_header">
        <Logo />
        <Search />
        <Header />
      </div>
      <Menu className="menu" />
      <Banner />
      <Category />
      <div className="luxury">
        <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485" alt="luxury watch" className="luxury_image" />
        <h2>Classic Gold Diamond. Philip Patek</h2>
      </div>
      <Collection />
      <ContactUs />
      <CustomerFavourites />
      <MyCart />
      <Product />
      <Products />
      <Testimonials />
      <Newsletter />
      <OurBrands />
      <ShopGallery />
      <Checkout />
      <Login />
      <Register />
      <FlashSale />
      <FeaturedProducts />
      <BlogNews />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default Home;
