import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CartShopButton from "../../../components/Button/CartShopButton";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/ProductsTypes";

export default function ProductCardMUI(prod: ProductType) {

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={()=> navigate(`/product/${prod.id}`)}>
        <CardMedia
          component="img"
          height="200"
          image={`${prod.thumbnail}`}
          alt={`imagem de ${prod.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
            {prod.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            R$ {prod.price}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <CartShopButton />
        </CardContent>
    </Card>
  );
}
