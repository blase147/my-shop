import React, { useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import './customerFavourites.scss';

const CustomerFavourites = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="customerFavourites_cont">
      <h2>Customers Favourites</h2>
      <div className="customerFavourites">
        {products.map((product) => (
          <div className="customerFavourites_card" key={product.id}>
            <div className="discount_cont">
              <FaBolt size={15} style={{ color: 'black' }} />
              -20%
            </div>
            <img
              src={product.product_image_url}
              alt={product.name}
              className="customerFavourites_image"
            />
            <h2>{product.name}</h2>
            <h3>
              $
              {product.price}
            </h3>
          </div>
        ))}
      </div>
      <h4>
        <button type="button">Show more favourites...</button>
      </h4>
    </div>
  );
};

export default CustomerFavourites;
