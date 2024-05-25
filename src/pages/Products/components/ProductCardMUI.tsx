

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
// import CartShopButton from "../../../components/Button/CartShopButton";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/ProductsTypes";

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

  return (
    <Card sx={{ width: 300 }}>
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

