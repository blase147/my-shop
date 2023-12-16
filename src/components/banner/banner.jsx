import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import ImageSlider from './ImageSlider';
import './banner.scss';

const Banner = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // const images = [
  //   {
  //     image: 'https://placekitten.com/800/400',
  //     major_desc: 'Classic Wears ',
  //     minor_desc: 'Original and Stylish',
  //     button: <button type="button">Shop Now</button>,
  //   },
  //   {
  //     image: 'https://placekitten.com/802/400',
  //     major_desc: 'Pecky Vintage',
  //     minor_desc: 'Your style , your choice',
  //     button: <button type="button">Shop Now</button>,
  //   },
  //   {
  //     image: 'https://placekitten.com/803/400',
  //     major_desc: 'Gold Plated',
  //     minor_desc: 'Original Diamond',
  //     button: <button type="button">Shop Now</button>,
  //   },
  //   {
  //     image: 'https://placekitten.com/804/400',
  //     major_desc: 'Over rated',
  //     minor_desc: 'Dandies and Hotties Goals',
  //     button: <button type="button">Shop Now</button>,
  //   },
  // ];
  return (
    <div className="banner">
      <ImageSlider products={products} />
    </div>
  );
};

export default Banner;
