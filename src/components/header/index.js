import React, { Component } from 'react' 
import { AwesomeButton } from 'react-awesome-button';
import {  Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';


// Styles
import './header.scss'



//Images
import logo from '../../img/logo-cnsf.png'





export default class Header extends Component {
    render() {
        return (
            
                <header className="main-header">

                    <div className="header-content">

                        <div className="header-logo">
                            <Link to="/cnsf" className="a-logo"><img src={logo} className="img-logo" alt=""></img></Link>
                        </div>


                        <nav className="main-nav">
                            <ul className="ul-nav">

                                <li className="list-colegio"><Link to="/cnsf" className="btn"><AwesomeButton type="primary" size="medium" >Colégio</AwesomeButton></Link>

                                        <ul className="drop-colegio">
                                            <li><Link to="/metologia" className="drop-metologia"><AwesomeButton type="primary" size="small">Metologia</AwesomeButton></Link></li>
                                            <li><Link to="/estrutura" className="drop-estrutura"><AwesomeButton type="primary" size="small">Estrutura</AwesomeButton></Link></li>
                                            <li><Link to="/fundação" className="drop-fundação"><AwesomeButton type="primary" size="small">Fundação</AwesomeButton></Link></li>
                                        </ul>

                                </li>


                                <li><Link to="noticias" ><AwesomeButton type="primary" size="medium" >Notíciais</AwesomeButton></Link>
                                

                                </li>


                                <li className="list-serviços"><Link to="serviços" ></Link><AwesomeButton type="primary" size="medium" >Serviços</AwesomeButton>
                                
                                    <ul className="drop-serviços">
                                        <li><Link to="esportes" className="drop-esportes"></Link><AwesomeButton type="primary" size="small">Esportes</AwesomeButton></li>
                                        <li><Link to="dança" className="drop-dança"></Link><AwesomeButton type="primary" size="small">Dança</AwesomeButton></li>
                                        <li><Link to="ballet" className="drop-ballet" ></Link><AwesomeButton type="primary" size="small">Ballet</AwesomeButton></li>
                                    </ul>
                                
                                
                                </li>



                                <li><Link to="pastoral"><AwesomeButton type="primary" size="medium" >Pastoral</AwesomeButton></Link></li>


                                <li><Link to="galeria"><AwesomeButton type="primary" size="medium" >Galeria</AwesomeButton></Link></li>


                                <li><Link to="contato"><AwesomeButton type="primary" size="medium" >Contato</AwesomeButton></Link></li>


                            </ul>
                        </nav>

                        
                    </div>

                    
                </header>
                
        )
    }
}
