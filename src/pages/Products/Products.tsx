import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/prodcuts";
import "./Products.css";
import SearchInput from "../../components/SearchInput";
import { ProductType } from "../../types/ProductsTypes";

const Products: React.FC = () => {
  const [filterTerm, setFilterTerm] = useState("")
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setProductsFromDB = async () => {
      setLoading(true);
      const newProducts = await getAllProducts();
      setLoading(false);

      setProducts(newProducts);
    };

    setProductsFromDB();
  }, []);

  const FilterPanel = () => {
    const onChangeFunc = (evt: React.ChangeEvent<HTMLInputElement>)=>{
      setFilterTerm(evt.target.value)
    }
    
    return (
      <div className="filterPanelContainer">
        <div className="custom-input">
          <SearchInput onChangeFunc={onChangeFunc}/>
        </div>
      </div>
    );
  };

  return (
    <div className="geralContainer">
      <FilterPanel />
      <main className="mainContainer">
        <ProductList products={products} loading={loading} />
      </main>
    </div>
  );
};

export default Products;
