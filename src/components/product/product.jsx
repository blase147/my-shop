import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Reducers/cartSlice';
import './product.scss';
import { fetchProducts } from '../../Redux/Reducers/productSlice';


const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product, 1));
  };

  return (
  <div className="product">
    <div className="product_inner">
      <div className="product_title">
        <h2>Product</h2>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && (
          <div className="products_cont">
            {products.map((product) => (
              <>
                <div className="products_card" key={product.id}>
                  <div className="product_image">
                    {product.product_image_url && (
                      <img
                        className="product_image"
                        src={product.product_image_url}
                        // style={{ width: '100%', height: '400px' }}
                        alt={product.name}
                        onError={(e) => console.error('Image failed to load', e)}
                      />
                    )}
                  </div>
                  <h5 className="name">
                    <Link to={`/${product.id}`}>{product.name}</Link>
                  </h5>
                  <p className="desc">{product.description}</p>
                  <p className="price">{product.price}</p>
                  <p className="cat">{product.category}</p>
                  <p className="discount">{product.discount}</p>
                  <p className="productype">{product.product_type}</p>
                </div>
                <button type="button" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
  };

export default Product;
