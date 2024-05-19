import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;


// Defini as propriedades que o componente ProductCard deve receber.
