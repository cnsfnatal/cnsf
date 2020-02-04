import React, { useState, useRef } from 'react' 
import { AwesomeButton } from 'react-awesome-button';
import { ThemeProvider } from 'styled-components';
import {  Link } from "react-router-dom";

// Components
import { useOnClickOutside } from '../../hooks';
import { theme } from '../../Theme';
import { GlobalStyles } from '../../Global';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';

// eslint-disable-next-line no-unused-vars
import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';


// Styles
import './header.scss'



//Images
import logo from '../../img/logo-cnsf.png'





export default function Header()  {
        const [open, setOpen] = useState(false);
        const node = useRef();
        useOnClickOutside(node, () => setOpen(false));

        return (
            <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                <header className="main-header">

                    <div className="header-content">

                            <div ref={node}>
                                <Burger open={open} setOpen={setOpen} />
                                <Menu open={open} setOpen={setOpen} />
                            </div>

                        <div className="header-logo">
                            <Link to="/cnsf" className="a-logo"><img src={logo} className="img-logo" alt=""></img></Link>
                        </div>


                        <nav className="main-nav">
                            <ul className="ul-nav">

                                <li className="list-colegio"><Link to="/cnsf" className="btn"><AwesomeButton type="primary" size="medium" className="btn-medium" >Colégio</AwesomeButton></Link>

                                        <ul className="drop-colegio">
                                            <li><Link to="/metologia" className="drop-metologia"><AwesomeButton type="primary" size="small" className="btn-small" >Metologia</AwesomeButton></Link></li>
                                            <li><Link to="/estrutura" className="drop-estrutura"><AwesomeButton type="primary" size="small" className="btn-small" >Estrutura</AwesomeButton></Link></li>
                                            <li><Link to="/fundação" className="drop-fundação"><AwesomeButton type="primary" size="small" className="btn-small" >Fundação</AwesomeButton></Link></li>
                                        </ul>

                                </li>


                                <li><Link to="noticias" ><AwesomeButton type="primary" size="medium" className="btn-medium" >Notíciais</AwesomeButton></Link>
                                

                                </li>


                                <li className="list-serviços"><Link to="serviços" ></Link><AwesomeButton type="primary" size="medium" className="btn-medium" >Serviços</AwesomeButton>
                                
                                    <ul className="drop-serviços">
                                        <li><Link to="esportes" className="drop-esportes"></Link><AwesomeButton type="primary" size="small" className="btn-small" >Esportes</AwesomeButton></li>
                                        <li><Link to="dança" className="drop-dança"></Link><AwesomeButton type="primary" size="small" className="btn-small" >Dança</AwesomeButton></li>
                                        <li><Link to="ballet" className="drop-ballet" ></Link><AwesomeButton type="primary" size="small" className="btn-small" >Ballet</AwesomeButton></li>
                                    </ul>
                                
                                
                                </li>



                                <li><Link to="pastoral"><AwesomeButton type="primary" size="medium" className="btn-medium" >Pastoral</AwesomeButton></Link></li>


                                <li><Link to="galeria"><AwesomeButton type="primary" size="medium" className="btn-medium" >Galeria</AwesomeButton></Link></li>


                                <li><Link to="contato"><AwesomeButton type="primary" size="medium" className="btn-medium" >Contato</AwesomeButton></Link></li>


                            </ul>
                        </nav>

                        
                    </div>

                    
                </header>
                </>
            </ThemeProvider>
                
        )
    
}
