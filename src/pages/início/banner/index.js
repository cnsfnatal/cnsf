import React, { Component } from 'react';

// Styles
import './banner.scss';

// Media
import Logo from '../../../img/logo-cnsf.png';
import Video from "./video_slide.mp4";


export default class Banner extends Component {
    render() {
        return (
            <div className="banner-container">
                

                    

                    <video  autoPlay muted loop className="video-banner">
                        <source src={Video} type="video/mp4" />
                        
                    </video>

                    <div className="text-banner-container">
                        <p className="title-banner">Colégio Nossa Senhora de Fátima</p>
                        <p className="text-banner">Uma educação para a inovação!</p>
                    </div>

                    <div className="banner-imageee">
                        <img src={Logo} className="image-banneeer" />
                    </div>
                    

                    

                
                

                
            </div>
        )
    }
}
