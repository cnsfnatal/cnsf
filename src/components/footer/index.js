import React, { Component } from "react";

// Styles
import "./footer.scss";

// Imagens
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/twitter.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-content">
        <div className="footer-text">
          <p className="footer-para">
            © 2019 - 2020 - Colégio de Nossa Senhora de Fátima - Todos os
            Direitos Reservados.
          </p>
          <p className="footer-para">
            {" "}
            Av. Rodrigues Alves, 646 - Tirol, Natal - RN, 59020-200 - Fone: (84)
            3222-2961
          </p>

          <h1 className="footer-title">Siga nossas redes sociais</h1>

          <div className="footer-logos">
            <div className="facebook-content">
              <a
                href="https://www.facebook.com/cnsfnataloficial/"
                className="link"
              >
                <img
                  src={Facebook}
                  className="facebook-logo"
                  alt="link para o facebook"
                />
              </a>
            </div>

            <div className="facebook-content">
              <a href="https://twitter.com" className="link">
                <img
                  src={Instagram}
                  className="facebook-logo"
                  alt="link para o instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
