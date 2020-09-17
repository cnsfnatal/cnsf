import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  background: transparent;
  width: 100%;

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;

    @media (max-width: 990px) {
      display: none;
    }
  }
`

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #fff;
    font-size: 28px;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 10;
    position: absolute;

    .dropdown-arrow {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background: #fff;

        top: -6.5px;
        left: -8px;
        border-radius: 4px 0 0 0;

        transform: rotate(45deg);
      }
    }

    .dropdown-container {
      position: absolute;

      overflow: hidden;
      box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);

      background: #fff;
      border-radius: 4px;
    }

    .dropdown-section {
      position: absolute;
    }

    .dropdown-background {
      position: absolute;
      bottom: 0;
      background: #f6f9fc;
      width: 100%;
    }
  }
`
export const Login = styled(Link)`
  height: 100%;

  span {
    font-size: 18px;
    color: #fff;
  }

  svg {
    width: 12px;
    height: 12px;
    color: #fff;
  }
`

export const Burguer = styled.div`
  height: 20px;
  width: 20px;
  display: none;

  background: #fff;

  position: absolute;
  top: 21px;
  right: 15px;

  @media (max-width: 990px) {
    display: unset;
  }
`
