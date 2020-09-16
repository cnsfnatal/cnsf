import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const Container = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};

  position: relative;
  width: 95%;
  height: 400px;
  border-radius: 4px;
  z-index: 50;
  top: 12px;
  margin: 0 auto;

  background: #fff;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);

  @media (min-width: 990px) {
    display: none;
  }
`

export const CloseButton = styled(MdClose)`
  width: 36px;
  height: 36px;

  position: absolute;
  top: 5px;
  right: 5px;

  color: #5533ff;
`

export const HeaderTitle = styled.div`
  width: 100%;

  padding: 20px 15px;

  h1 {
    text-transform: uppercase;
    color: #8898aa;
    font-size: 17px;
  }
`

export const AulasContent = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 15px;
  width: 100%;

  @media (max-width: 300px) {
    flex-direction: column;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 12px;

      span {
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #80b9f9;
      }

      p {
        font-size: 17px;
        color: #424770;
        margin-left: 8px;
        font-weight: bold;
      }
    }
  }
`
