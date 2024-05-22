import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}
// >>>>>>>>>>>>>>>>>>  SE FOR MUITO ESPECÍFICO, USE DIRETO DO MUI AO INVEZ DESSE    
// https://mui.com/material-ui/react-button/

const ButtonFilled: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonMUI
      onClick={onClick}
      variant='contained'
      color='secondary'
      fullWidth

      >{text}</ButtonMUI>
    // <button className="beautiful-button" onClick={onClick}>
    //   {text}
    // </button>
  );
};

export default ButtonFilled;
