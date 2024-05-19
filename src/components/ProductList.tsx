import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const testProducts = [
    {
        id: '1',
        name: "Mouse Gamer",
        price: "22,00",
    },
    {
        id: '2',
        name: "Teclado Mecânico",
        price: "89,99",
    },
    {
        id: '3',
        name: "Fone de Ouvido Bluetooth",
        price: "45,50",
    },
    {
        id: '4',
        name: "Monitor UltraWide",
        price: "299,99",
    },
    {
        id: '5',
        name: "Cadeira Gamer",
        price: "199,00",
    }
];

type productsType = {
    id: string,
    name: string,
    price: string
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<productsType[]>(testProducts);
    const [loading, setLoading] = useState(false);
    
    //AINDA NÃO EXISTE BANCO DE DADOS PARA ISSO
    // useEffect(() => {
    //     axios.get('/api/products')
    //     .then(response => {
    //         setProducts(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         setLoading(false);
    //     });
    // }, []);
    
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