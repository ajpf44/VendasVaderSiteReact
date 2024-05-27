
import CartItem from "./CartInterface";

type UserType = {
    id?: string;
    name: string;
    email: string;
    address?: string;
    cart?: CartItem[];
    job?:string,
    bio?:string,
    phone?: string,
    company?: string
}

export default UserType;