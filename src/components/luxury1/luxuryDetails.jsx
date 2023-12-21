import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import './luxuryDetails.scss';

const LuxuryProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const renderLuxuryImages1 = () => {
    const luxuryImages = [];
    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];

      if (product.price > 20000) {
        luxuryImages.push(
          <div key={product.id} className="luxuryDetails_card">
            <img
              src={product.product_image_url}
              alt={product.name}
              className="luxuryDetails_image"
            />
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
            <button type="button" onClick={() => dispatch(addToCart(product))}>
              Add to Carttt
            </button>
          </div>,
        );
      }
    }

    return luxuryImages.slice(0, 2);
  };

  return (
    <div className="luxuryDetails">
      <div className="luxuryDetails_cont">{renderLuxuryImages1()}</div>
    </div>
  );
};

export default LuxuryProducts;
