import React from 'react'

import { DevelopersWrapper } from './styles'

export const Developers = () => (
  <DevelopersWrapper>
    <div className="primary">
      <span className="documentation" />

      <div>
        <h3>Pesquisar notíciais</h3>
        <p>Encontre notíciais periódicas sobre nosso colégio</p>

        <div>
          <ul>
            <li>
              <h4>Últimas notíciais</h4>
            </li>
            <li>Ensino a deficientes Visuais</li>
            <li>Sustentabilidade no cólegio</li>
            <li>Ensino a defecientes Auditivos</li>
            <li>Robótica Educacional no cólegio</li>
          </ul>

          <ul>
            <li>
              <h4>Guias</h4>
            </li>
            <li>Hello World com Arduino</li>
            <li>Como integrar Wi-fi no módulo ESP</li>
            <li>Instalão de um senso de som no Arduino</li>
            <li>
              Como se livrar de um colega de trabalho que não entrega nada
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="secondary">
      <li>
        <span className="api-reference" />
        talvez tenha alguma coisa aqui
      </li>
      <li>
        <span />
        talvez tenha alguma coisa aqui
      </li>
      <li>
        <span />
        talvez tenha alguma coisa aqui
      </li>
    </ul>
  </DevelopersWrapper>
)
