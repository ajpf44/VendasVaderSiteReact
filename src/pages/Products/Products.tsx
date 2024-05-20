import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/prodcuts";
import "./Products.css";
import FilterPanel from "./components/FilterProductPanel";

const Products: React.FC = () => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="geralContainer">
      <FilterPanel />
      <main className="mainContainer">
        <ProductList />
      </main>
    </div>
  );
};

export default Products;
