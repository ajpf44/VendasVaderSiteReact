import React, { useEffect, useState, useCallback } from "react";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../services/products";
import "./Products.css";
import FilterPanel from "./components/FilterProductsPanel";
import { ProductType } from "../../types/ProductsTypes";
import {
  filterProductsByTerm,
  filterProductsByPrice,
  filterProductsByCategory,
} from "../../utils/filterProducts";
import SearchInput from "../../components/SearchInput";
import { Box, Container } from "@mui/material";
import LoadingIndiciator from "../../components/LoadingIndicator";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [checkboxesStatus, setCheckboxesStatus] = useState<any>({});

  useEffect(() => {
    const fetchNewProducts = async () => {
      
      const newProducts = await getAllProducts();
      sessionStorage.setItem("products", JSON.stringify(newProducts));

      return newProducts;
    };
    const setupCategoriesCheckboxesStatus = async () => {
      setLoading(true);
      const productsStoragedJson:string|null = sessionStorage.getItem("products")

      let p:ProductType[];
      if(productsStoragedJson==null){
        console.log("no products in storage");
        
        p = await fetchNewProducts();
      } else{
        console.log("products in storage");
        p = await JSON.parse(productsStoragedJson) as ProductType[];
      }
      setProducts(p);
      setProductsToShow(p);
      setLoading(false);


      const categoriesStatus = p
        .map((product) => product.category)
        .filter((category, index, array) => array.indexOf(category) === index) // Get unique categories
        .reduce((acc: Record<string, boolean>, category) => {
          acc[category] = true;
          return acc;
        }, {} as Record<string, boolean>);

      setCheckboxesStatus(categoriesStatus);
      
    };

    setupCategoriesCheckboxesStatus();
  }, []);

  const handleFilter = useCallback(
    (term?: string) => {
      const searchedProducts = filterProductsByTerm(
        products,
        term ?? searchTerm
      );
      let searchedAndFilteredProducts = filterProductsByPrice(
        searchedProducts,
        minPrice,
        maxPrice
      );

      searchedAndFilteredProducts = filterProductsByCategory(
        searchedAndFilteredProducts,
        checkboxesStatus
      );

      setProductsToShow(searchedAndFilteredProducts);
    },
    [products, searchTerm, minPrice, maxPrice, checkboxesStatus]
  );

  const handleCheckboxChange = (category: string) => {
    setCheckboxesStatus((prevStatus: Record<string, boolean>) => ({
      ...prevStatus,
      [category]: !prevStatus[category],
    }));
  };

  if (loading) {
    return <LoadingIndiciator size={100} />;
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <SearchInput
          value={searchTerm}
          onChangeFunc={(evt) => {
            setSearchTerm(evt.target.value);
            handleFilter(evt.target.value);
          }}
          onKeyDown={(evt) => {
            if (evt.code == "Enter") {
              handleFilter(searchTerm);
            }
          }}
        />
      </div>
      <Container className="geralContainer" maxWidth="xl">
        <div style={{ display: "flex", gap: "2rem" }}>
          <FilterPanel
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleFilter={handleFilter}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            maxPrice={maxPrice}
            checkboxesStatus={checkboxesStatus}
            setCheckboxesStatus={setCheckboxesStatus}
            handleCheckboxChange={handleCheckboxChange}
            prodCategories={
              new Set(products.map((product) => product.category))
            }
          />
          <Box className="mainContainer">
            <ProductList products={productsToShow} />
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Products;
