import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CartShopButton from "../../components/Button/CartShopButton";
import { getProductById } from "../../services/products";
import { Box, Button, Card, CardMedia, Container } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import LoadingIndiciator from "../../components/LoadingIndicator";

const ProductDetail: React.FC = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  const handleSwitchImage = (switchFactor: number) => {
    setImageIndex(
      (imageIndex) =>
        (imageIndex + switchFactor + product.images.length) %
        product.images.length
    );
    // setImageIndex((imageIndex) => {
    //   const newIndex = imageIndex + switchFactor;

    //   if (newIndex < 0) return product.images.length - 1;
    //   if (newIndex > product.images.length - 1) return 0;
    //   return newIndex;
    // });
  };

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

  if (loading) return <LoadingIndiciator size={100} />;

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
      <Card sx={{ display: "flex", padding: "5rem", flexWrap: "wrap" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", height: "25rem" }}>
            <Button
              sx={{ borderRadius: "100%" }}
              onClick={() => handleSwitchImage(-1)}
              color="info"
            >
              <ArrowCircleLeft sx={{ fontSize: 40 }} />
            </Button>
            <CardMedia
              component="img"
              image={`${product.images[imageIndex]}`}
              alt={`imagem do ${product.title}`}
              sx={{ height: "25rem", width: "30rem" }}
            />
            <Button
              sx={{ borderRadius: "100%" }}
              onClick={() => handleSwitchImage(1)}
              color="info"
            >
              <ArrowCircleRight sx={{ fontSize: 40 }} />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {product.images.map((_: any, index: number) => {
              return (
                <Button
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    padding: 0,
                    minWidth: 0,
                    borderRadius: "1rem",
                  }}
                  key={index}
                  variant="contained"
                  color={index == imageIndex ? "secondary" : "info"}
                  onClick={() => setImageIndex(index)}
                ></Button>
              );
            })}
          </Box>
        </Box>

        <Box
          className="productDetailInfoContainer"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              gap: "0.5rem",
              display: "flex",
              flexDirection: "column",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              {product.title}
            </h2>
            <p style={{ fontStyle: "italic" }}>{product.brand}</p>
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
