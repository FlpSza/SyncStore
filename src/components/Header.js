import React from "react";
import "../Styles/Header.css";
import logo from "../images/logo.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">SyncroSeg</h1>
      <nav className="nav-buttons">
        <div className="nav-item">
          <AccountCircleIcon className="nav-icon" fontSize="medium" />
          <div className="nav-item-content">
            <span className="nav-title">Minha Conta</span>
            <span className="nav-subtitle">Entrar/Cadastrar</span>
          </div>
        </div>
        <div className="nav-item">
          <HelpIcon className="nav-icon" fontSize="medium" />
          <div className="nav-item-content">
            <span className="nav-title">Atendimento</span>
            <span className="nav-subtitle">Ao Cliente</span>
          </div>
        </div>
        <div className="nav-item">
          <FavoriteIcon className="nav-icon" fontSize="medium" />
          <div className="nav-item-content">
            <span className="nav-title">Meus</span>
            <span className="nav-subtitle">Favoritos</span>
          </div>
        </div>
        <div className="nav-item">
          <Brightness4Icon className="nav-icon" fontSize="medium" />
          <div className="nav-item-content">
            <span className="nav-title">Modo</span>
            <span className="nav-subtitle">Escuro</span>
          </div>
        </div>
        <div className="nav-item2 cart-container">
          <ShoppingCartIcon />
          <div className="nav-item-content">
            <span className="nav-subtitle">Carrinho</span>
            <span className="nav-title">{0} produtos</span>
          </div>
          <KeyboardArrowDownIcon className="arrow-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
