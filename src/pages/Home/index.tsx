import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'
import logo from '../../assets/logo.png'
import metologiaImage from '../../assets/metologia-image.png'
import smile from '../../assets/smile.png'
import idea from '../../assets/idea.png'
import lamp from '../../assets/lamp.png'

import {
  Container,
  Header,
  VideoArea,
  AboutContainer,
  ImageContent,
  TextContainer,
  InfoContainer,
  InfoCard
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Layout>
          <Link to="/">
            <img src={logo} alt="dark" />
          </Link>
          <div>
            <Navbar />
          </div>
        </Layout>
      </Header>

      <VideoArea>
        <video autoPlay muted loop className="video-banner">
          <source src={Video} type="video/mp4" />
        </video>
      </VideoArea>

      <AboutContainer>
        <ImageContent>
          <img src={metologiaImage} alt="Crianças se divertindo" />
        </ImageContent>

        <TextContainer>
          <strong>Metologia</strong>
          <p>
            Acreditamos que a escola deve ser o lugar onde os alunos despertem
            sua criatividade, deem vidas aos seus sonhos e construam o seu
            próprio futuro. Além disso, atuamos com abordagens de ensino capazes
            de estimular diversificados pensamento na construção de
            conhecimentos, projetos e propósitos de vida!
          </p>
        </TextContainer>
      </AboutContainer>

      <InfoContainer>
        <InfoCard>
          <strong>Competências emocionais</strong>
          <img src={smile} alt="Sorriso" />
          <p>
            o trabalho em equipe, a empatia, a comunicação são pilares
            fundamentais para o crescimento pessoal e profissional
          </p>
        </InfoCard>

        <InfoCard>
          <strong>Mudança de Pensamento</strong>
          <img src={idea} alt="Ideia" />
          <p>despertando criações sem barreiras</p>
        </InfoCard>

        <InfoCard>
          <strong>Ambientes de inovação</strong>
          <img src={lamp} alt="Lâmpada" />
          <p>
            oficinas em ambientes reais, possibilitando novas crenças e quebra
            de paradigmas.
          </p>
        </InfoCard>
      </InfoContainer>
    </Container>
  )
}

export default Home
