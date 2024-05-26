
import React, { useContext } from "react";
import { getAllUsers, getUserById } from "../../services/users";
import useSession from "../../hooks/useSession";
import { Box } from "@mui/material";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { Button } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";


const Home: React.FC = () => {
  const session = useSession();
  const Themectx = useContext(ThemeContext)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "89.2vh",
        gap: "1rem",
        fontSize: "1.2rem",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        textAlign: "center",
      }}
    >
      <h1>Projeto React Web - Ecommerce</h1>

      {session.user?.name ? <p>Olá usuário {session.user?.name}</p> : ""}

      <div>
        <ButtonFilled onClick={() => getAllUsers()}>
          {" "}
          Console usuários{" "}
        </ButtonFilled>
      </div>
      <div>
        <ButtonFilled
          onClick={()=>getUserById("-NyaOMccJFB9unHcS8tC")}
        >get User By Id</ButtonFilled>
      </div>
      <div>
        <ButtonFilled>
          
        </ButtonFilled>
      </div>
      <Button variant='contained' color='primary' onClick= {Themectx.toggleTheme}>teste</Button>
      <p>
        Como importa no váriaveis de ambiente no código:{" "}
        {import.meta.env.VITE_foo_var}
      </p>
    </Box>
  );
};

export default Home;
