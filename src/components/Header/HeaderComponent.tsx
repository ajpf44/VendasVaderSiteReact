import "./Header.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../../assets/Vendas_Vader-removebg-preview.png"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


  
  
  export default function HeaderComponent() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
      React.useState<null | HTMLElement>(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const {token} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);


 
    
 
    const HandlelogoutIcon = () => {
      return logout();
    }

const renderIconButton = () => {
 return token ?
 <IconButton size="large" aria-label="" color="inherit" onClick={HandlelogoutIcon} >
 <Badge  color="error">
   <AccountCircle />
 </Badge>
</IconButton>:
    <IconButton size="large" aria-label="" color="inherit" onClick={handleLoginIconClick}>
        <Badge  color="error">
          <LoginIcon />
        </Badge>
      </IconButton> 
  
}

   

    const navigate = useNavigate();
    
    const handleLoginIconClick = () => {
        navigate("/Login");
    };
    const handleCartIconClick = () => {
    navigate("/Cart")

  }
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
        {renderIconButton()}
       
        </MenuItem>
        <MenuItem >
          <IconButton
        

          >
            <LocalGroceryStoreIcon />
          </IconButton>
         
        </MenuItem>
      </Menu>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
             <img className="officialLogo" src={logo} alt="Logo do Mercado livre"></img>
            </IconButton>
            
         
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <a href="/Products" className="ProductText">Produtos</a>
         
            {renderIconButton()}


             
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleCartIconClick}
                color="inherit"
              >
                <LocalGroceryStoreIcon />
              </IconButton>
            </Box>
         
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
  }