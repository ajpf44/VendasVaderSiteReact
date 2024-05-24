import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CartShopButton from "../../components/Button/CartShopButton";
import { getProductById } from "../../services/products";
import {
  Box,
  Card,
  CardMedia,
  Container,
} from "@mui/material";

const ProductDetail: React.FC = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      setLoading(true);
      const p = await getProductById(id);
      setLoading(false);

      setProduct(p);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        minHeight: "85.5vh",
      }}
    >
      <Card sx={{display: "flex", padding: "5rem", alignItems: "stretch"}}>
        <CardMedia
          component="img"
          image={`${product.images[0]}`}
          alt={`imagem do ${product.title}`}
          sx={{maxHeight: "40vh", width: 'auto' }}
        />  

        <Box className="productDetailInfoContainer" sx={{display: "flex", justifyContent: "space-between"}}>
          <Box sx={{gap: '0.5rem', display: "flex", flexDirection: "column", paddingBottom: '1rem'}}>
            <h2>{product.title}</h2>
            <p className="infoBrandText">{product.brand}</p>
          </Box>
            <p className="infoPriceText">
              <span className="spanDiscount">
                R${(Number(product.price) * 1.3 * 5.15).toFixed(2)}
              </span>
              <span className="spanPrice">
                R${(Number(product.price) * 5.15 - 0.01).toFixed(2)}
              </span>
            </p>
          <p className="infoDescriptionText">{product.description}</p>
          <div className="infoButtonDiv">
            <CartShopButton />
          </div>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductDetail;
