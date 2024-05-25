import React from "react";
import { ProductType } from "../../../types/ProductsTypes";
import ProductCardMUI from "./ProductCardMUI";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ProductListProps {
  products: ProductType[];
  loading: boolean;
  quantities: { [key: string]: number };
  onQuantityChange: (id: string, quantity: number) => void;
  onAddToCart: (product: ProductType) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, quantities, onQuantityChange, onAddToCart }) => {
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
          <ProductCardMUI 
          key={product.id} 
          {...product} 
          quantity={quantities[product.id] || 1}
          onQuantityChange={onQuantityChange}
          onAddToCart={onAddToCart}
          />
        </div>     
     ))}
    </div>
  );
};

export default ProductList;
