import styled from 'styled-components';
import background from '../../assets/background.png'
import { motion } from 'framer-motion'

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: #343078;
`
export const Header = styled.header`
  width: 100%;
  background: #1b113b80;
  display: flex;
  align-items: center; 
  height: 120px;
  position: fixed;

  z-index: 1000000;
`

export const AboutContainer = styled.div`
  width: 100%;
  padding: 150px 20px 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #fff;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1550px) {
    flex-direction: column;
  }
`


export const TextContainer = styled(motion.div)`
  background: #fff;
  width: 30%;
  height: min-content;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-right: 100px;
  @media (max-width: 1550px) {
    margin-left: 140px;
    margin-bottom: 20px;
    width: 73%;


  }


  padding: 20px;

  > strong {
    font-size: 52px;
    color: #c72d22;
  }

  > p {
    font-size: 26px;
    color: #575050;
  }
`

export const ImagesWrapper = styled.div`
  width: 80%;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 1fr 1fr;
  grid-row-gap: 20px;

  @media (max-width: 1550px) {
    grid-template-columns: 1fr 1fr;

  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-row:  1fr;


  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 280px;
  height: 280px;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 auto;


  img {
    width: 200px;
    height: 200px;
    
  }

  strong {
    text-align: center;
    font-size: 22px;
    font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, san
  }
`