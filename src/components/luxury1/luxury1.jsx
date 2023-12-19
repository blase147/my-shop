import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../Redux/Reducers/productsSlice';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import './luxury1.scss';
// import Item from '../myCart/item';

const Luxury1 = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [hover, setHover] = useState(false);

  const handleOnHover = () => {
    setHover(true);
  };

  const handleOnBlur = () => {
    setHover(false);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const renderLuxuryImages1 = () => {
    const luxuryImages = [];
    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];

      if (product.price < 20000) {
        luxuryImages.push(
          <div
            key={product.id}
            onMouseOver={handleOnHover}
            onFocus={handleOnHover}
            onMouseOut={handleOnBlur}
            onBlur={handleOnBlur}
            className={`luxury_images_card1 ${hover ? 'showAddToCart' : ''}`}
          >
            <img
              src={product.product_image_url}
              alt={product.name}
              className="luxury_image"
            />
            <div className="name_cart">
              <Link to={`/products/${product.id}`}>
                <h2>{product.name}</h2>
              </Link>
              {hover && (
                <>
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                </>
              )}
            </div>
            ,
          </div>,
        );
      }
    }

    return luxuryImages[0];
  };

  return (
    <div className="luxury1">
      <div className="luxury1_inner">{renderLuxuryImages1()}</div>
    </div>
  );
};

export default Luxury1;
