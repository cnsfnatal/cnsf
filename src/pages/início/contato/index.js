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
                    <div className="form-title-container-home">
                        <h1 className="title-form">Faça sua <br></br> pré-matrícula</h1>
                    </div>
                    
                    <form className="form-container" onSubmit={handleSubmit}>

                        <input
                            className="input-form-home"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            required
                        />

                        <input
                            className="input-form-home"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            required
                        />

                        <input
                            className="input-form-home"
                            type="text"
                            name="escola"
                            placeholder="Nome da escola"
                            required
                        />
                        
                        <input
                            className="msg-form-home"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            required
                        />
                        

                        <button type="submit" className="btn-enviar-form-home">Enviar</button>
                    </form>
                </div>



            </div>
    )
}

export default Contato_Home