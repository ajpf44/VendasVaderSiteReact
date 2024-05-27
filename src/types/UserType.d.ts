
import CartItem from "./CartInterface";

type UserType = {
    id?: string;
    name: string;
    email: string;
    address?: string;
    cart?: CartItem[];
}

export default UserType;