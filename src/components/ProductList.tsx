import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get('/api/products')
        .then(response => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);
    
    if (loading) return <p>Carregando...</p>;
    
    return (
        <div>
      {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
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