import React, { useState } from 'react'

import { Products, Developers, Company } from '../Content'
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown'
import { Container, DropdownStyles } from './styles'
import Burger from '../Burger'
import MobileMenu from '../MobileMenu'
// import { FaArrowRight } from 'react-icons/fa'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Colégio"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Notíciais"
                content={Developers}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Perfil"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}

export default Navbar
