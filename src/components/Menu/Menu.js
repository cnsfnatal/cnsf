// Menu.js
import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

// Media
import logo from "../../img/logo-cnsf.png";

// Styles
// eslint-disable-next-line no-unused-vars
import buttonStyle from "../header/react-awesome-button-master/src/styles/themes/theme-blue/index";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <img
          src={logo}
          alt="logotipo do Cólegio"
          onClick={() => setOpen(!open)}
        />
      </Link>

      <Link to="/metologia" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Metologia
        </AwesomeButton>
      </Link>

      <Link to="/fundação" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Fundação
        </AwesomeButton>
      </Link>

      <Link to="/estrutura" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Estrutura
        </AwesomeButton>
      </Link>

      <Link to="/galeria" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Galeria
        </AwesomeButton>
      </Link>

      <Link to="/contato" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Contato
        </AwesomeButton>
      </Link>
      <Link to="/noticiais" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Notíciais
        </AwesomeButton>
      </Link>
      <Link to="/esportes" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Esportes
        </AwesomeButton>
      </Link>
      <Link to="/dança" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Dança
        </AwesomeButton>
      </Link>
      <Link to="/ballet" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Ballet
        </AwesomeButton>
      </Link>
      <Link to="/pastoral" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Pastoral
        </AwesomeButton>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
