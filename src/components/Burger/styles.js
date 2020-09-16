//Burger.styled.js
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledBurger = styled(motion.button)`
  position: absolute;
  top: 1.5em;
  right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 990px) {
    display: none;
  }

  transition: opacity 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.55;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    /* :first-child {
      transform: ${({ open }) =>
      open
        ? 'rotate(45deg)'
        : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) =>
      open ? '0' : '1'};
      transform: ${({ open }) =>
      open
        ? 'translateX(20px)'
        : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({
      open,
    }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};

    } */
  }
`
