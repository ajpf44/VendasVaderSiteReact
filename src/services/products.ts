import { ProductType } from "../types/ProductsTypes";
import api from "./api";

async function getAllProducts(): Promise<ProductType[]>{
    const arrProducts:Array<ProductType> = [];
    try {
        const res = await api.get('/products.json')
        
        for(const key in res.data){
            arrProducts.push({
                ...res.data[key],
                id: key,
                price: (res.data[key].price * 5.15).toFixed(2) 
                //Cotação do dolar 5.15 e formata para 2 casas decimais
            })
        }

        return arrProducts;
    } catch (error) {
        console.log("Error getting all products: ", error);
        return [];
    }

}

async function getProductById(id: string): Promise<ProductType | null>{
    try {
        const {data} = await api.get(`/products/${id}.json`)

        return data;
    } catch (error) {
        console.log("Error getting products by id: " + error);
        return null;
    }
}

async function storageProducts(product: ProductType){
    try {
        const res = await api.post('/products.json', product)
        
        console.log(res);   
    } catch (error) {
        console.log("Error storing products: "  +error)
    }
}

export {getAllProducts, storageProducts, getProductById}