import React from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}
// >>>>>>>>>>>>>>>>>>  SE FOR MUITO ESPECÍFICO, USE DIRETO DO MUI AO INVEZ DESSE
// https://mui.com/material-ui/react-button/

const CartShopButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonMUI
      onClick={onClick}
      variant="outlined"
      color="secondary"
      fullWidth
      endIcon={ <ShoppingCartOutlined></ShoppingCartOutlined>}
    >
      Adicionar ao
    </ButtonMUI>
    // <button className="beautiful-button" onClick={onClick}>
    //   {text}
    // </button>
  );
};

export default CartShopButton;

// COMENTEI O BOTÃO POIS CRIEI OUTRO BOTÃO E GOSTEI MAIS DELE :D
// DEIXEI ESTE SALVO PARA FINS DE REUSO CASO O GRUPO PREFIRA SEGUIR COM ESTE. 