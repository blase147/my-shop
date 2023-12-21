import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchProducts } from '../../Redux/Reducers/productsSlice';
// import { addToCart } from '../../Redux/Reducers/cartSlice';
import './luxury1.scss';
// import Item from '../myCart/item';

const Luxury1 = () => {
  const products = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ce1Nsb7RPFYmx_Btbb9o7Sh6oNmQiSV1vax638pFRdQATJuJdky4AzQ00RT9OiwmdpU&usqp=CAU', name: 'Luxury Wears' },
  ];

  const renderLuxuryImages1 = () => {
    const luxuryImages = [];

    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];
      if (product.image) {
        luxuryImages.push(
          <div key={product.id} className="luxury_images_card1">
            <img src={product.image} alt={product.name} className="luxury_image" />
            <Link to="/luxuryDetails/">
              <div className="name_cart">
                <h2>{product.name}</h2>
              </div>
            </Link>
          </div>,
        );
      }
    }
    return luxuryImages;
  };
  return (
    <div className="luxury1">
      <div className="luxury1_inner">{renderLuxuryImages1()}</div>
    </div>
  );
};

export default Luxury1;
