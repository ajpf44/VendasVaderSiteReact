// import React from "react";
// import { Button as ButtonMUI } from "@mui/material";
// import { ShoppingCartOutlined } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// interface ButtonProps {
//   text?: string;
//   onClick?: () => void;
// }
// // >>>>>>>>>>>>>>>>>>  SE FOR MUITO ESPECÍFICO, USE DIRETO DO MUI AO INVEZ DESSE
// // https://mui.com/material-ui/react-button/

// const CartShopButton: React.FC<ButtonProps> = ({ onClick }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (onClick) onClick();
//     navigate("/products");
//   };

  
//   return (
//     <ButtonMUI
//       onClick={onClick}
//       variant="outlined"
//       color="secondary"
//       fullWidth
//       endIcon={ <ShoppingCartOutlined></ShoppingCartOutlined>}
//     >
//       Adicionar ao
//     </ButtonMUI>
//     // <button className="beautiful-button" onClick={onClick}>
//     //   {text}
//     // </button>
//   );
// };

// export default CartShopButton;

// // COMENTEI O BOTÃO POIS CRIEI OUTRO BOTÃO E GOSTEI MAIS DELE :D
// // DEIXEI ESTE SALVO PARA FINS DE REUSO CASO O GRUPO PREFIRA SEGUIR COM ESTE. 

import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const CartShopButton: React.FC<ButtonProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate("/products");
  };

  return (
    <button onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
      Voltar
      <ShoppingCartOutlined style={{ marginLeft: '8px' }} />
    </button>
  );
};

export default CartShopButton;
