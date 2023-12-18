import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import { fetchProducts } from '../../Redux/Reducers/productSlice';

const Item = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Render a single product without the map
  const product = products[0]; // Assuming you want the first product
  if (!product) {
    return null; // Render nothing if there's no product
  }

  return (
    <div key={product.id}>
      <h3>{product.title}</h3>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
