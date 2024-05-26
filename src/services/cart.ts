import CartItem from "../types/CartInterface";
import api from "./api";

async function storeCart (id: string, cart: CartItem[]){
    if(id == "") return;

    try {
        const res = await api.post(`/carts/${id}.json`, cart)
        console.log(`Storing cart for user ${id}: ${res.status}`)
    } catch (error) {
        console.error(`Error storing cart for user ${id}: ${error} `)
    }
}

async function getCart(id: string){
    if(id == "") return;
    
    try {
        const {data} = await api.get(`/carts/${id}.json`);
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error get cart for user ${id}: ${error} `)
    }
}

export  {storeCart, getCart}