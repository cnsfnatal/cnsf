// Burger.js
import React from 'react'
import { StyledBurger } from './styles'
import { motion } from 'framer-motion'

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <motion.div />

      <motion.div />

      <motion.div />
    </StyledBurger>
  )
}

export default Burger
