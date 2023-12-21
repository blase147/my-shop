import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import ImageSlider from './ImageSlider';
import './category.scss';

const Category = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Check if products are not empty before filtering
  const jewelries = products ? products.filter((product) => product.product_type === 'Jewelry') : [];
  const jewelryStock = jewelries.length;
  const wristWatches = products ? products.filter((product) => product.product_type === 'Wrist Watches') : [];
  const wristWatchesStock = wristWatches.length;
  const belts = products ? products.filter((product) => product.product_type === 'Belts') : [];
  const beltsStock = belts.length;
  const glasses = products ? products.filter((product) => product.product_type === 'Glasses') : [];
  const glassesStock = glasses.length;

  const defaultProducts = [
    { image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/6899101/1.jpg?3056', name: 'Jewelries', stock: `Available Products: ${jewelryStock}` },
    { image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/6133011/1.jpg?7485', name: 'Wrist Watches', stock: `Available Products: ${wristWatchesStock}` },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCyWZZXEdfQ3IBgzkkFeEhGrxbUgWfUjw9js57Tpu0f0lbvgqcB3RE_g3NVGwslRFls4&usqp=CAU', name: 'Belts', stock: `Available Products: ${beltsStock}` },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZbjL2K9sP0GJCB02Y0zCBwHz2e4FyxlSHotIzwL8_JoDOPpVgn96Qwt9OsJN4eGRyjI&usqp=CAU', name: 'Glasses', stock: `Available Products: ${glassesStock}` },
  ];

  return (
    <div className="category">
      <h2 className="category_label">Categories</h2>
      <ImageSlider defaultProducts={defaultProducts} />
    </div>
  );
};

export default Category;
