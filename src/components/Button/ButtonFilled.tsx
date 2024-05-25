import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

interface ButtonProps {
  children?: any;
  onClick?: () => void;
}
// >>>>>>>>>>>>>>>>>>  SE FOR MUITO ESPECÍFICO, USE DIRETO DO MUI AO INVEZ DESSE    
// https://mui.com/material-ui/react-button/

const ButtonFilled: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonMUI
      onClick={onClick}
      variant='contained'
      color='secondary'
      fullWidth

      >{children}</ButtonMUI>
  );
};

export default ButtonFilled;
