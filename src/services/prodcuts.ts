import { ProductType } from "../types/ProductsTypes";
import api from "./api";

const URL = import.meta.env.VITE_API_URL + '/products.json'

async function getAllProducts(): Promise<ProductType[]>{
    const arrProducts:Array<ProductType> = [];
    try {
        const res = await api.get(URL)
        
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

async function storageProducts(product: ProductType){
    try {
        const res = await api.post(URL, product)

        console.log(res);   
    } catch (error) {
        console.log("Error storing products: "  +error)
    }
}

export {getAllProducts, storageProducts}