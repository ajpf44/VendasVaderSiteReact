import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ButtonEmpty from "../../../components/Button/ButtonEmpty";
import CartShopButton from "../../../components/Button/CartShopButton";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "../../../types/ProductsTypes";

export default function ProductCardMUI(prod: ProductType) {

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={()=> navigate(`/product/${prod.id}`)}>
        <CardMedia
          component="img"
          height="140"
          image={`data:image/jpeg;base64,${prod.image}`}
          alt={`imagem de ${prod.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {prod.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            R$ {prod.price}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Link to={`/product/${prod.id}`}>
            <ButtonEmpty> Detalhes </ButtonEmpty>
          </Link>
          <CartShopButton />
        </CardContent>
    </Card>
  );
}
