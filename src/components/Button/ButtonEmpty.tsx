import React from "react";
import { Button as ButtonMUI } from "@mui/material";

interface ButtonProps {
  text?: string;
  children: string;
  color?: "secondary"|"primary"
  onClick?: () => void;
}
// >>>>>>>>>>>>>>>>>>  SE FOR MUITO ESPECÍFICO, USE DIRETO DO MUI AO INVEZ DESSE
// https://mui.com/material-ui/react-button/

const ButtonEmpty: React.FC<ButtonProps> = ({ children, onClick, color="secondary" }) => {
  return (
    <ButtonMUI onClick={onClick} variant="outlined" color={color} fullWidth>
      {children}
    </ButtonMUI>
    // <button className="beautiful-button" onClick={onClick}>
    //   {text}
    // </button>
  );
};

export default ButtonEmpty;