
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
// import CartShopButton from "../../../components/Button/CartShopButton";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/ProductsTypes";
import { CartContext } from "../../../contexts/CartContext";
import useCart from "../../../hooks/useCart";

export default function ProductCardMUI({ prod }: { prod: ProductType }) {
interface ProductCardProps {
  prod: ProductType;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

const ProductCardMUI: React.FC<ProductCardProps> = ({ 
  prod, 
  quantity, 
  onIncreaseQuantity, 
  onDecreaseQuantity 
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const {addToCart} = useCart;

  const handleAddToCart = () => {
    const itemToAdd = { ...prod, quantity };
    addToCart(itemToAdd);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={() => navigate(`/product/${prod.id}`)}>
      <CardActionArea onClick={() => navigate(`/product/${prod.id}`)}>
        <CardMedia
          component="img"
          height="200"
          image={`${prod.thumbnail}`}
          alt={`imagem de ${prod.title}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
          >
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}
          >
            {prod.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            R$ {prod.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <Button variant="outlined" onClick={handleDecreaseQuantity}>
            -
          </Button>
          <Typography variant="body1">{quantity}</Typography>
          <Button variant="outlined" onClick={handleIncreaseQuantity}>
            +
          </Button>
        </div>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </Button>
      </CardContent>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Button variant="outlined" onClick={onDecreaseQuantity}>-</Button>
          <Typography variant="body1">{quantity}</Typography>
          <Button variant="outlined" onClick={onIncreaseQuantity}>+</Button>
        </div>
        <Button variant="contained" color="primary" onClick={() => { /* lógica de adicionar ao carrinho */ }}>
          Adicionar ao carrinho
        </Button>
        {/* <CartShopButton /> */} {/*COMENTEI O BOTÃO POIS EU CRIEI OUTRO E GOSTEI MAIS DELE. */}
      </CardContent>
    </Card>
  );
};

export default ProductCardMUI;

