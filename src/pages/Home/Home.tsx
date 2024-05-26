import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";

import img from "../../assets/backgroundHome.jpg";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90vh",
        gap: "1rem",
        fontSize: "1.2rem",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "primary.contrastText",
        textAlign: "center",
      }}
    >
      <Box
        className="animate"
        sx={{ background: "rgba(0,0,0,0.5)", width: "100%", height: "90vh" }}
      >
        <Typography
          variant="h1"
          color="secondary.dark"
          className="title jediFont"
        >
          {" "}
          vendas vader
        </Typography>
        <Typography color={"white"} className="jediFont" margin={1}>
          Produtos intergaláticos
        </Typography>
        <Typography
          variant="body1"
          color={"white"}
          maxWidth="70vw"
          textAlign="justify"
          margin="auto"
        >
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
