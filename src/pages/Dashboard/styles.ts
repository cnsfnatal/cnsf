import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { shade } from 'polished'

export const Container = styled.div`
  background: #fff;
  height: 100vh;

  display: flex;
  flex-direction: row;
`

export const NavBar = styled.div`
  background: #555151;
  height: 100vh;
  width: 400px;
  position: sticky;

  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  background: #2398ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  > h1 {
    color: #efffef;
    text-align: center;
    font-size: 30px;
  }
`
export const Navigation = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
`
export const NavigationButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  margin-top: 8px;
  transition: opacity 0.2s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  > strong {
    margin-left: 16px;
    color: #efffef;
    text-align: right;
    font-size: 28px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;

  overflow: auto;
`
export const IntroductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  background: #fff;
  align-items: center;

  > strong {
    color: #2398ed;
    font-size: 34px;
  }

  > button {
    margin-top: 12px;
    padding: 10px 20px;
    height: 52px;
    width: 400px;
    border-radius: 50px;
    border: 0;
    background: #2398ed;
    transition: 0.2s;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: rgb(50, 106, 228);
    }
  }
`
export const IntroductArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputTitle = styled.input`
  padding: 10px;
  margin-top: 12px;
  width: 400px;
  height: 62px;
  border: 0.5px solid #121214;
  border-radius: 10px;
  font-size: 34px;
  font-weight: bold;
  color: #c72d22;
  background: #fff;
`

export const InputParagraph = styled.textarea`
  padding: 10px;
  margin-top: 12px;
  width: 400px;
  height: 300px;
  border: 0.5px solid #121214;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #121214;
  background: #fff;
`

export const CardText = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 25px;
  background: #fff;

  > strong {
    color: #2398ed;
    font-size: 34px;
    margin-bottom: 12px;
  }

  > aside {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
`

export const TextCardCard = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  max-width: 400px;
  height: 540px;
  background: #2398ed;

  @media (max-width: 990px) {
    height: auto;
  }

  > input {
    font-size: 28px;
    color: #efeeef;
    text-align: center;
    border: 0.5px solid #121214;
    border-radius: 10px;
  }

  > img {
    height: 150px;
    width: 150px;
    margin: 22px 0;
  }

  > h1 {
    color: #efeeef;
  }

  > textarea {
    font-size: 28px;
    background: transparent;

    text-align: center;
    width: 380px;
    height: 300px;
    border: 0.5px solid #121214;
    border-radius: 10px;
  }

  > button {
    margin-top: 12px;
    padding: 10px 20px;
    height: 52px;
    width: 400px;
    border-radius: 50px;
    border: 0;
    transition: 0.2s;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
export const Slider = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  padding: 0 25px;

  > label {
    width: 60px;
    height: 60px;
    background: #2398ed;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 30px;
      height: 30px;
      color: #efeeef;
    }

    &:hover {
      background: ${shade(0.2, '#2398ed')};
    }
  }

  > aside {
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-row: 1fr 1fr;
  }

  > strong {
    color: #2398ed;
    font-size: 34px;
    text-align: center;
  }
`

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  > img {
    width: 480px;
    border-radius: 10px;
  }

  > button {
    margin-top: 12px;
    padding: 10px 20px;
    height: 52px;
    width: 480px;
    border-radius: 50px;
    border: 0;
    background: #c72d22;
    transition: 0.2s;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #99170e;
    }
  }
`
export const CardNumber = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 25px;
  background: #fff;

  > strong {
    color: #2398ed;
    font-size: 34px;
    margin-bottom: 12px;
  }

  > aside {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
`

export const CardNumberCard = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  max-width: 400px;
  height: 540px;
  background: #2398ed;

  @media (max-width: 990px) {
    height: auto;
  }

  > input {
    font-size: 28px;
    color: #efeeef;
    text-align: center;
    border: 0.5px solid #121214;
    border-radius: 10px;
  }

  > img {
    height: 150px;
    width: 150px;
    margin: 22px 0;
  }

  > h1 {
    color: #efeeef;
  }

  > textarea {
    font-size: 28px;
    background: transparent;

    text-align: center;
    width: 380px;
    height: 300px;
    border: 0.5px solid #121214;
    border-radius: 10px;
  }

  > button {
    margin-top: 12px;
    padding: 10px 20px;
    height: 52px;
    width: 400px;
    border-radius: 50px;
    border: 0;
    transition: 0.2s;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
