import { useEffect, useState } from 'react';

import { ProductCard } from './productCard/ProductCard';

import { ProductServices } from '../../services';
import './Products.css';

export const Products = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    ProductServices.getProducts()
    .then((data) => setProducts(data))
    .catch((e) => {
      console.error(e);
      alert('Failed to fetch products');
    })
  }, [])

  return (
    <div className="products">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
