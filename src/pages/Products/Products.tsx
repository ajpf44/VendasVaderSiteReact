import React, { useEffect } from "react";
import ProductList from "../../components/ProductList";
import { getAllProducts } from "../../services/prodcuts";

const Products: React.FC = () => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ProductList />
    </div>
  );
};

export default Products;
