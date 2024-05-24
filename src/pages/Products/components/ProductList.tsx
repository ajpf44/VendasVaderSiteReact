import React from "react";
import { ProductType } from "../../../types/ProductsTypes";
import ProductCardMUI from "./ProductCardMUI";

interface ProductListProps {
  products: ProductType[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <div className="listContainer">
      {products.map((product) => (
        <div className="productContainer" key={product.id}>
          <ProductCardMUI key={product.id} {...product} />
        </div>
        
     ))}
    </div>
      
  );
};

export default ProductList;
