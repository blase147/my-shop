import React from 'react';
import { Link } from 'react-router-dom';
import './luxury2.scss';

const Luxury2 = () => {
  const products = [
    {
      id: 1,
      image: 'https://qnetforlife.com/wp-content/uploads/2023/05/Woman-Wearing-Watch-Closeup-1000x500.jpg',
      name: 'Women',
    },
    {
      id: 2,
      image: 'https://www.watchesandcrystals.com/cdn/shop/articles/quality-luxury-watches-to-style-mens-wardrobe-812147.jpg?v=1659676083',
      name: 'Men',
    },
  ];

  const renderLuxuryImages1 = () => {
    const luxuryImages = [];

    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];
      if (product.image) {
        luxuryImages.push(
          <div key={product.id} className="luxury_images_card2">
            <Link to={product.name.toLowerCase() === 'women' ? '/women/' : '/men/'}>
              <img src={product.image} alt={product.name} className="luxury_image" />
            </Link>
            <div className="name_cart">
              <Link to={product.name.toLowerCase() === 'women' ? '/women/' : '/men/'}>
                <h2>{product.name}</h2>
              </Link>
            </div>
          </div>,
        );
      }
    }
    return luxuryImages;
  };

  return (
    <div className="luxury2">
      <div className="luxury2_inner">{renderLuxuryImages1()}</div>
    </div>
  );
};

export default Luxury2;
