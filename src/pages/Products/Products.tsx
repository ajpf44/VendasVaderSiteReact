import React, { useEffect, useState, useCallback } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/prodcuts";
import "./Products.css";
import SearchInput from "../../components/SearchInput";
import { ProductType } from "../../types/ProductsTypes";
import {filterProductsByTerm, filterProductsByPrice} from "../../utils/filterProducts";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);
  
  //PAINEL DE PESQUISA
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1231233123);

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

  const handleFilter = useCallback(() => {
    let searchedProducts = filterProductsByTerm(products, searchTerm);
    searchedProducts = filterProductsByPrice(searchedProducts, minPrice, maxPrice);

    setProductsToShow(searchedProducts);
    
  }, [products, searchTerm]);

  return (
    <div className="geralContainer">
      <FilterPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleFilter={handleFilter}
      />
      <main className="mainContainer">
        <ProductList products={productsToShow} loading={loading} />
      </main>
    </div>
  );
};

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  handleFilter: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  setMinPrice,
  setMaxPrice,
  handleFilter,
}) => {
  return (
    <div className="filterPanelContainer">
      <div className="custom-input">
        <SearchInput
          value={searchTerm}
          onChangeFunc={(evt) => {
            setSearchTerm(evt.target.value);
            handleFilter();
          }}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              handleFilter();
            }
          }}
        />

        <div className="priceFilterContainer">
          <h3>Preços</h3>

          <label htmlFor="">
            <span>Min</span>
            <input type="number" name="" id="" onChange={(e)=>setMinPrice(e.target.value)}/>
          </label>

          <label htmlFor="">
            <span>Max</span>
            <input type="number" name="" id="" onChange={(e)=>setMaxPrice(e.target.value)}/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Products;
