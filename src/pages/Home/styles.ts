import styled from 'styled-components'
import background from '../../assets/background.png'
import { motion } from 'framer-motion'

export const Container = styled.main`
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

export const VideoArea = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;

    > h1 {
      text-transform: uppercase;
      color: #1258c9;
      font-size: 64px;
      letter-spacing: 2px;
      font-family: Concert One;
      text-align: center;
      margin-bottom: 12px;
    }

    > p {
      color: #1258c9;
      font-size: 42px;
      letter-spacing: 2px;
      text-align: center;
      font-family: Concert One;
    }
  }
`
export const AboutContainer = styled.div`
  width: 100%;
  padding: 100px 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background: #fff;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 990px) {
    padding: 20px 10px;
    flex-direction: column;
  }
`

export const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    width: 440px;
    height: 650px;

    @media (max-width: 990px) {
      width: 230px;
      height: 340px;
    }
  }
`
export const TextContainer = styled(motion.div)`
  background: #fff;
  width: 30%;
  border-radius: 15px;

  padding: 20px;

  @media (max-width: 990px) {
    width: 95%;
  }

  > strong {
    font-size: 52px;
    color: #c72d22;
  }

  > p {
    font-size: 26px;
    color: #575050;
  }
`

export const InfoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #6861f2;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`

export const InfoCard = styled(motion.div)`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  max-width: 400px;
  height: 480px;

  @media (max-width: 990px) {
    height: auto;
  }

  > strong {
    font-size: 36px;
    color: #efeeef;
    text-align: center;
  }

  > img {
    height: 150px;
    width: 150px;
    margin: 22px 0;
  }

  > h1 {
    color: #efeeef;
  }

  > p {
    text-align: center;
    color: #efeeef;
    font-size: 28px;
  }
`
export const SliderContainer = styled.div`
  padding: 50px;
  background: #85e687;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .slider {
    height: 720px;
    width: 1280px;
  }
`
export const InfoNumberContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background: #6861f2;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`
export const ContactContainer = styled.div`
  width: 100vw;
  height: 75vh;
  padding: 50px 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #85e687;
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > form {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > h1 {
      text-align: center;
      color: #2b73e0;
      font-size: 68px;
      text-transform: uppercase;
      font-family: Concert One;
      margin-bottom: 24px;
    }

    > input {
      margin-top: 12px;
      width: 100%;
      height: 62px;
      border-radius: 50px;
      border: 1px solid #ddd;
      padding-right: 12px;
      padding-left: 12px;
      font-size: 15px;
      background: #fff;
    }

    > button {
      margin-top: 12px;
      padding: 10px 20px;
      height: 62px;
      width: 100%;
      border-radius: 50px;
      border: 0;
      background: rgb(50, 106, 228);
      transition: 0.2s;
      color: #fff;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: #2553b8;
      }
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  background: #6861f2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
`

export const FooterCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;

  > strong {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 32px;
  }

  > aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > p {
      color: #fff;
      font-size: 20px;
    }
  }
`

export const SocialContent = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const SocialButton = styled(motion.a)`
  width: 42px;
  height: 42px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: #3027db;
  }
`

export const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
`
