import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import './shopGallery.scss';
import { addToCart } from '../../Redux/Reducers/cartSlice';

const ShopGallery = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="shopGallery">
      <h2>Shop Gallery</h2>
      <div className="shopGallery_inner">
        {products.map((product) => (
          <div className="shopGallery_card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.product_image_url}
                alt={product.name}
                className="shopGallery_image"
              />
            </Link>
            <button type="button" onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <h2>See + more</h2>
    </div>
  );
};

export default ShopGallery;
