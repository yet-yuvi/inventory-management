import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks';

import { ProductCard } from './productCard/ProductCard';

import './Products.css';
import { Box, Button } from '../../ui';

export const Products = () => {
  const { products } = useProducts();

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count+1);

  useEffect(() => {
    if (count > 4) {
      alert('reached maximum');
    }
    console.log('inside useEffect 1');
  },[count]);

  useEffect(() => {
    console.log('inside useEffect 2');
  },[]);

  console.log('rendering....');

  return (
    <div className="products">
      <Box justifyContent="center">
      <Button variant="contained" size="small" onClick={increaseCount}><h1>+</h1></Button>
      </Box>
      <p>{count}</p>
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
