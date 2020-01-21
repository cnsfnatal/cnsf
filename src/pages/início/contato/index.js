import React, {  } from 'react';



// Styles
import './contato.scss';


// Components

function Contato_Home(data) {

        async function handleSubmit(e) {
            e.preventDefault()
        }

    
        return (
            <div className="contato-home-container">


                <div className="form-contato">

                    <form id="new-post" onSubmit={handleSubmit}>

                        <h1 className="title-form">Faça a sua <br />pré-matrícula</h1>
                        
                        
                        
                        <input
                            className="all"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            required
                        />

                        <input
                            className="all"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            required

                        />
                        <input
                            className="all"
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            required
                        />
                        <input
                            className="msg"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            
                        />

                        <button  type="submit" className="btn-enviar">Enviar</button>
                    </form>
                </div>



            </div>
    )
}

export default Contato_Home