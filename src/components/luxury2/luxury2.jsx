import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import './luxury2.scss';

const Luxury2 = () => {
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

      if (product.price > 500) {
        luxuryImages.push(
          <div key={product.id} className="luxury_images_card2">
            <img
              src={product.product_image_url}
              alt={product.name}
              className="luxury_image2"
            />
            <h2>{product.name}</h2>
          </div>,
        );
      }
    }

    return luxuryImages.slice(0, 2);
  };

  return (
    <div className="luxury2">
      <div className="luxury1_inner2">{renderLuxuryImages1()}</div>
    </div>
  );
};

export default Luxury2;
