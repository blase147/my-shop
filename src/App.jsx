import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Category from './components/category/category';
import ContactUs from './components/contactUs/contactUs';
import MyCart from './components/myCart/myCart';
import Products from './components/products/products';
import MyFavourites from './components/myFavourites/myFavourites';
import Home from './components/home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/myCart" element={<MyCart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/myFavourites" element={<MyFavourites />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
