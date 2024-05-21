import { ProductType } from "../types/ProductsTypes";
import api from "./api";

const baseURL = import.meta.env.VITE_API_URL 

async function getAllProducts(): Promise<ProductType[]>{
    const arrProducts:Array<ProductType> = [];
    try {
        const res = await api.get(baseURL + '/products.json')
        
        for(const key in res.data){
            arrProducts.push({
                ...res.data[key],
                id: key
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
        const {data} = await api.get(baseURL + `/products/${id}.json`)

        return data;
    } catch (error) {
        console.log("Error getting products by id: " + error);
        return null;
    }
}

async function storageProducts(product: ProductType){
    try {
        const res = await api.post(baseURL + '/products.json', product)

        console.log(res);   
    } catch (error) {
        console.log("Error storing products: "  +error)
    }
}

export {getAllProducts, storageProducts, getProductById}