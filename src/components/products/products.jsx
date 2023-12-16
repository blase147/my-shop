import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Reducers/productSlice';
import './products.scss';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="products">
      <h2>Products</h2>
      <div>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && (
          <div className="products_cont">
            {products.map((item) => (
              <div className="products_card" key={item.id}>
                <div className="product_image">
                  {item.product_image_url && (
                    <img
                      className="product_image"
                      src={item.product_image_url}
                      // style={{ width: '100%', height: '400px' }}
                      alt={item.name}
                      onError={(e) => console.error('Image failed to load', e)}
                    />
                  )}
                </div>
                <h5 className="name">
                  <Link to={`/${item.id}`}>{item.name}</Link>
                </h5>
                <p className="desc">{item.description}</p>
                <p className="price">{item.price}</p>
                <p className="cat">{item.category}</p>
                <p className="discount">{item.discount}</p>
                <p className="productype">{item.product_type}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
