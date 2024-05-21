import React, { useEffect, useState, useCallback } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/products";
import "./Products.css";
import FilterPanel from "./components/FilterProductsPanel";
import { ProductType } from "../../types/ProductsTypes";
import {filterProductsByTerm, filterProductsByPrice} from "../../utils/filterProducts";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  useEffect(() => {
    const setProductsFromDB = async () => {
      setLoading(true);
      const newProducts = await getAllProducts();
      setLoading(false);

      setProducts(newProducts);
      setProductsToShow(newProducts);
    };

    setProductsFromDB();
  }, []);

  const handleFilter = useCallback((term="") => {
    const searchedProducts = filterProductsByTerm(products, term);
    const searchedAndFilteredProducts = filterProductsByPrice(searchedProducts, minPrice, maxPrice);

    setProductsToShow(searchedAndFilteredProducts);
  }, [products, searchTerm, minPrice, maxPrice]);

  return (
    <div className="geralContainer">
      <FilterPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleFilter={handleFilter}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <main className="mainContainer">
        <ProductList products={productsToShow} loading={loading} />
      </main>
    </div>
  );
};

export default Products;
