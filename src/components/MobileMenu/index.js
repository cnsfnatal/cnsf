import React from 'react'
import { Link } from 'react-router-dom'

import { Container, CloseButton, HeaderTitle, AulasContent } from './styles'

function MobileMenu({ open, setOpen }) {
  return (
    <Container open={open} setOpen={() => setOpen(!open)}>
      <CloseButton onClick={() => setOpen(false)} />
      <HeaderTitle>
        <h1>Aulas</h1>
      </HeaderTitle>

      <AulasContent>
        <div>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
        </div>
        <div>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
          <Link to="/webinar">
            <span />
            <p>Arduino</p>
          </Link>
        </div>
      </AulasContent>
    </Container>
  )
}

export default MobileMenu
