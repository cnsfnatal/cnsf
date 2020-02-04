// Menu.js
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

// Styles
// eslint-disable-next-line no-unused-vars
import buttonStyle from '../header/react-awesome-button-master/src/styles/themes/theme-blue/index';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>

      <Link to="/ura/quem-somos" ><AwesomeButton type="primary" size="large"  >Quem Somos</AwesomeButton></Link>
      <Link to="/ura/tutoriais"><AwesomeButton type="primary" size="large" >Tutoriais</AwesomeButton></Link>
      <Link to="/ura/noticiais"><AwesomeButton type="primary" size="large" >Notíciais</AwesomeButton></Link>
      <Link to="/ura/metologia"><AwesomeButton type="primary" size="large" >Metologia</AwesomeButton></Link>
      <Link to="/ura/contato"><AwesomeButton type="primary" size="large" >Contato</AwesomeButton></Link>

    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;