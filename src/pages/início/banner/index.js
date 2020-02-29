import React, { Component } from "react";

// Styles
import "./banner.scss";

// Media
import Logo from "../../../img/logo-cnsf.png";
//import Video from "./video_slide.mp4";
import Video_1 from "./cnsf_1.mp4";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <video autoPlay muted loop className="video-banner">
          <source src={Video_1} type="video/mp4" />
        </video>

        <div className="text-banner-container">
          <p className="title-banner">Colégio Nossa Senhora de Fátima</p>
          <p className="text-banner">Uma educação para a inovação!</p>
        </div>

        <div className="banner-imageee">
          <img src={Logo} className="image-banneeer" alt="cnsf" />
        </div>
      </div>
    );
  }
}
