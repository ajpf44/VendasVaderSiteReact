import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/prodcuts";
import "./Products.css";

const Products: React.FC = () => {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="geralContainer">
      <section className="filterSection"></section>
      <main className="mainContainer">
        <ProductList />
      </main>
    </div>
  );
};

export default Products;
