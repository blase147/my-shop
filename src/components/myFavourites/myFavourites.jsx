import React from 'react';
import './myFavourites.scss';
import Menu from '../menu/menu';
import Logo from '../logo/logo';
import Search from '../search/search';
import Header from '../header/header';
import Newsletter from '../newsletterSub/newsletterSub';
import Footer from '../footer/footer';
import CopyRight from '../copyright/copyright';

const MyFavourites = () => (
  <div className="myfav">
    <div className="search_header">
      <Logo />
      <Search />
      <Header />
    </div>
    <Menu />

    <h2>My Favourites</h2>
    <div className="myfav_cont">
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
      <div className="myfav_card">
        <img
          src="https://i5.walmartimages.com/asr/b88a3fee-ab2a-4a03-bdae-5d3f6cdc9844.346aee852d35a6b58cd81b3eeadb91c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          alt="Shop Gallery"
          className="fav_image"
        />
        <div>
          <h3>Rose Royce</h3>
          <p>$112</p>
        </div>
      </div>
    </div>
    <Newsletter />
    <Footer />
    <CopyRight />
  </div>
);

export default MyFavourites;
