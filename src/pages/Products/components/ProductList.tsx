import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../../services/prodcuts";
import { ProductType } from "../../../types/ProductsTypes";

interface ProductListProps {
  products: ProductType[];
  loading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({products, loading}) => {

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="listContainer">
      {products.map((product) => {
        return (
          <div className="productContainer" key={product.id}>
            <img
              src={`data:image/jpeg;base64,${product.image}`}
              alt={`imagem do ${product.name}`}
              style={{ width: "160px", height: "120px" }}
            />
            <ProductCard key={product.id} {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

// Rendenizei os produtos utilizando o componente ProductCard.
// Utilizei useState para controlar o estado dos produtos e se está carregando.
// Se ainda estiver carregando, exibimos uma mensagem de carregamento.
// Se houver erro na requisição, exibimos no console e marcamos que o carregamento foi concluído.
// Utilizaei useEffect para buscar a lista de produtos quando o componente é montado.
// Definimos os produtos recebidos do servidor e marcamos que o carregamento foi concluído.
