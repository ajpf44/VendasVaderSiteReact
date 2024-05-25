
import CartItem from "./CartInterface";

type UserType = {
    id?: string;
    name: string;
    email: string;
    adress?: string;
    cart?: CartItem;
}

export default UserType;