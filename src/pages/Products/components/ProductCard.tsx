import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
  return (
    <div className="cardProductInfoContainer">
      <h3>{name}</h3>
      <p>R$ {price}</p>

      <div className="cardButtonsContainer">
        <Button text="Adicionar ao Carrinho" onClick={() => {}} />

        <Link to={`/product/${id}`}>
          <Button text="View Details" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

// Defini as propriedades que o componente ProductCard deve receber.
