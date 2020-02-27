/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Styles from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue/index';


// Styles
import './metologia.scss';


// Images

import Image from '../../../img/metologia-image.png';

export default class Metologia extends Component {
    render() {
        return (
            <div className="container-content">
                <div className="container-image">

                    <img src={Image} className="image-content"></img>


                </div>

                <div className="container-text">
                    <h1 className="title-content">Metologia</h1>
                    <p className="text-content">Acreditamos que a escola deve ser o lugar onde os alunos despertem sua criatividade, deem vidas aos seus sonhos e construam o seu próprio futuro. Além disso, atuamos com abordagens de ensino capazes de estimular diversificados pensamento  na construção de conhecimentos, projetos e propósitos de vida!</p>
                    <Link to="/metologia" className="a-btn">< AwesomeButton type="primary" size="large" className="somos-button">Saiba Mais</ AwesomeButton></Link>

                </div>

                
            </div>
        )
    }
}