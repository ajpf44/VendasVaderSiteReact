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

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: (term: string) => void;
  minPrice: string;
  maxPrice: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  setMinPrice,
  setMaxPrice,
  handleFilter,
  maxPrice,
  minPrice,
}) => {
  return (
    <div className="filterPanelContainer">
      <div className="custom-input">
        <SearchInput
          value={searchTerm}
          onChangeFunc={(evt) => {
            setSearchTerm(evt.target.value);
            handleFilter(evt.target.value);
          }}
          onKeyDown={()=>{}}
        />

        <div className="priceFilterContainer">
          <h3>Preços</h3>

          <label htmlFor="">
            <span>Min</span>
            <input type="number" name="" id="" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}/>
          </label>

          <label htmlFor="">
            <span>Max</span>
            <input  type="number" name="" id="" value={maxPrice} onChange={(e)=>setMaxPrice(String(e.target.value))}/>
          </label>  

          <button
            onClick={()=>handleFilter("")}
          >Filtrar</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
