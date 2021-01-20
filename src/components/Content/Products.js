import React from 'react'
import {Link} from 'react-router-dom'

import { ProductsWrapper } from './styles'

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Metodologia</h3>
          <p>Conheça a metodologia que usamos em nosso colégio</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <Link to="/estrutura">
          <h3>Estrutura</h3>
          <p>Conheça a estrutura de nossa escola</p>
        </Link>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>Fundação</h3>
          <p>Conheça como nosso colégio foi fundado</p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Pastoral</h3>
          <p>Conheça o nosso pastoral</p>
        </div>
      </li>
      <li>
        <span className="payments" />

        <div>
          <h3>Galeria</h3>
          <p>Veja a nossa galeria</p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Esportes</h3>
        <p>Robótica Educacional - Aspectos Técnicos e Pedagógicos</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Dança</h3>
        <p>
          Robótica Educacional Sustentavel - Todos os seus Aspectos Técnicos
        </p>
      </li>
      <li>
        <span className="radar" />

        <h3>Ballet</h3>
        <p>
          Robótica Educacional - Aplicações no Ensino a Deficientes Auditivos
        </p>
      </li>
    </ul>
  </ProductsWrapper>
)
