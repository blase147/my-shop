import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/category/category';
import ContactUs from './components/contactUs/contactUs';
import MyCart from './components/myCart/myCart';
import Products from './components/products/products';
import MyFavourites from './components/myFavourites/myFavourites';
import Home from './components/home/home';
import ViewCart from './components/myCart/viewCart';
import './App.css';
import CheckOut from './components/myCart/checkOut';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/viewCart" element={<ViewCart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/products" element={<Products />} />
          <Route path="/myFavourites" element={<MyFavourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
