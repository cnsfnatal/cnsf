import styled from 'styled-components'
import background from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 500vh;
  background: #343078;
`

export const Header = styled.header`
  width: 100%;
  background: #1b113b80;
  display: flex;
  align-items: center;
  height: 120px;
  position: fixed;

  z-index: 10;
`

export const VideoArea = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
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

  @media (max-width: 990px) {
    padding: 20px 10px;
    flex-direction: column;
  }
`

export const ImageContent = styled.div`
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
export const TextContainer = styled.div`
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

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: #6861f2;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`

export const InfoCard = styled.div`
  margin: 20px auto;
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

  > p {
    text-align: center;
    color: #efeeef;
    font-size: 28px;
  }
`
