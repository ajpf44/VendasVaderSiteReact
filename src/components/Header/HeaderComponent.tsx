import "./Header.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../assets/Vendas_Vader-removebg-preview.png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { useContext } from "react";
import AccountMenu from "../../../e-commerce-react/src/components/AccountMenu/AccountMenu";

const HeaderComponent: React.FC = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleLoginIconClick = () => {
    navigate("/Login");
  };

  const handleCartIconClick = () => {
    navigate("/Cart");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {token ? (
          <AccountMenu />
        ) : (
          <IconButton size="large" aria-label="" color="inherit" onClick={handleLoginIconClick}>
            <Badge color="error">
              <LoginIcon color="primary" />
            </Badge>
          </IconButton>
        )}
      </MenuItem>
      <MenuItem>
        <IconButton onClick={handleCartIconClick}>
          <LocalGroceryStoreIcon color="primary" />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{}}>
      <AppBar position="static" sx={{ backgroundColor: "black", height: "5rem" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <img className="officialLogo" src={logo} alt="Logo do Vendas Vader"></img>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <a href="/Products" className="ProductText">
              Produtos
            </a>

            {token ? (
              <AccountMenu />
            ) : (
              <IconButton size="large" aria-label="" color="inherit" onClick={handleLoginIconClick}>
                <Badge color="error">
                  <LoginIcon color="primary" />
                </Badge>
              </IconButton>
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleCartIconClick}
              color="inherit"
            >
              <LocalGroceryStoreIcon color="primary" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default HeaderComponent;