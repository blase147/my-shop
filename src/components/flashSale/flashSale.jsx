import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import ImageSlider from './ImageSlider';
import './flashSale.scss';

const FlashSale = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // const images = [
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 1', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/1_3a6eb486-5877-4a77-8dda-856fe736883d_580x.jpg?v=1658563053', name: 'Image 2', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 3', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/1_3a6eb486-5877-4a77-8dda-856fe736883d_580x.jpg?v=1658563053', name: 'Image 4', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 5', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 6', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 7', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 8', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 9', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 10', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 11', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 12', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 13', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 14', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 15', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=16588178120', name: 'Image 16', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 17', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 18', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 19', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 20', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 21', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 22', stock: '126 Products' },
  //   { image: 'https://similux-vinovatheme.myshopify.com/cdn/shop/products/2_d8c0ae29-ad25-4d41-a66c-c72200290fd9_360x.jpg?v=1658817812', name: 'Image 23', stock: '126 Products' },
  // ];

  return (
    <div className="flash_sale">
      <h2 className="flash_sale_label">Flash Sale</h2>
      <ImageSlider products={products} />
    </div>
  );
};

export default FlashSale;
