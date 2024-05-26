import React from "react";
import { motion } from "framer-motion";
import { Box, Link, Typography } from "@mui/material";

import img from "../../assets/backgroundHome.jpg";
import "./Home.css";
import ButtonEmpty from "../../components/Button/ButtonEmpty";
import { Link as LinkRouter } from "react-router-dom";
import { GitHub } from "@mui/icons-material";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90vh",

        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

        overflow: "auto",
      }}
    >
      <motion.div
        style={{ width: "100%" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 4,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Box
          className="animate"
          sx={{
            background: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            color="secondary.dark"
            className="title jediFont"
          >
            vendas vader
          </Typography>
          <Typography color={"white"} className="jediFont" margin={1}>
            Produtos intergaláticos
          </Typography>

          <Box
            color={"white"}
            maxWidth="60rem"
            textAlign="justify"
            margin="auto"
            height={"70%"}
            justifyContent={"space-evenly"}
            display={"flex"}
            flexDirection={"column"}
            padding={"2rem 0"}
          >
            <Typography variant="h4">Bem-vindo ao Vendas Vader!</Typography>

            <Typography fontSize={"1.1rem"}>
              Esse é o{" "}
              <Link
                href="https://github.com/brjoaof/senac-2024-01-react/tree/master/trabalho-final"
                color="primary"
                target="_blank"
              >
                Projeto final
              </Link>{" "}
              da disciplina de React Web do{" "}
              <Link href="https://serratec.org/" target="_blank">
                Serratec
              </Link>{" "}
              em parceria com o Senac, instruido pelo Professor João Felipe.
              Desenvolvido ao longo de 9 dias, nosso objetivo era construir um
              E-commerce com uma interface agradável, integração com uma API e
              sistema de autenticação, em React com TypeScript. O código pode
              ser encontrado no{" "}
              <Link
                href="https://github.com/ajpf44/e-commerce-react"
                target="_blank"
              >
                Repositório do Github <GitHub sx={{fontSize:" 1rem"}}/>. 
              </Link>
            </Typography>

            <Typography fontSize={"1.1rem"}>
              O Vendas Vader é um E-commerce de variedades, onde você encontrará
              uma ampla gama de produtos para atender às suas necessidades.
              Explore nossos produtos e aproveite sua jornada de compras
              conosco!
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <LinkRouter to={"/members"}>
                <ButtonEmpty color="primary">Quem somos nós?</ButtonEmpty>
              </LinkRouter>
              <LinkRouter
                to={"https://github.com/ajpf44/e-commerce-react"}
                target="_blank"
              >
                <ButtonEmpty color="primary">Repositório  </ButtonEmpty>
              </LinkRouter>
            </Box>
          </Box>
          <Box maxWidth={"20vw"} margin={"auto"}></Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
