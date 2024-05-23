import React from "react";
import { ProductType } from "../../../types/ProductsTypes";
import ProductCardMUI from "./ProductCardMUI";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ProductListProps {
  products: ProductType[];
  loading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={80} />
      </Box>
    );
  }

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
