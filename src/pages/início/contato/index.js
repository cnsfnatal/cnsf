import React, { useState } from "react";
import api from "../../../services/api";

// Styles
import "./contato.scss";

// Components

function Contato_Home(data) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [celular, setCelular] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const sendEmail = await api.post("/send-email", {
      email: email,
      nome: nome,
      mensagem: `Mensagem: ${mensagem} 
                   Email: ${email}
                   Celular: ${celular}`
    });

    alert(`Recebemos sua mensagem ${nome}, entraremos em contato em breve.`);
    console.log(sendEmail);
  }

  return (
    <div className="contato-home-container">
      <div className="form-contato">
        <div className="form-title-container-home">
          <h1 className="title-form">
            Faça sua <br></br> pré-matrícula
          </h1>
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input-form-home"
            type="text"
            name="email"
            placeholder="Seu email"
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            className="input-form-home"
            type="text"
            name="nome"
            placeholder="Seu nome"
            onChange={e => setNome(e.target.value)}
            required
          />

          <input
            className="input-form-home"
            type="text"
            name="celular"
            placeholder="Seu celular"
            onChange={e => setCelular(e.target.value)}
            required
          />

          <input
            className="msg-form-home"
            type="text"
            name="mensagem"
            placeholder="Mensagem"
            onChange={e => setMensagem(e.target.value)}
            required
          />

          <button type="submit" className="btn-enviar-form-home">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contato_Home;
