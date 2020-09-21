import React, { useCallback, useState, useEffect } from 'react'
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import api from '../../services/api'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'
import logo from '../../assets/logo.png'
import metologiaImage from '../../assets/metologia-image.png'
import smile from '../../assets/smile.png'
import idea from '../../assets/idea.png'
import lamp from '../../assets/lamp.png'
import frente from '../../assets/frente.jpg'
import sala from '../../assets/sala.jpg'
import sala2 from '../../assets/class.jpg'

import {
  Container,
  Header,
  VideoArea,
  AboutContainer,
  ImageContent,
  TextContainer,
  InfoContainer,
  InfoCard,
  SliderContainer,
  InfoNumberContainer,
  ContactContainer,
  Footer,
  FooterCard,
  SocialButton,
  SocialContent
} from './styles'

function Home() {
  const [images, setImages] = useState([])
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  useEffect(() => {
    api.get('/image').then(image => {
      setImages(image.data)
    })
  }, [])

  console.log(images)

  const handleContanctSubmit = useCallback(event => {
    event.preventDefault()
    console.log('submit')
  }, [])

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
            O trabalho em equipe, a empatia, a comunicação são pilares
            fundamentais para o crescimento pessoal e profissional
          </p>
        </InfoCard>

        <InfoCard>
          <strong>Mudança de Pensamento</strong>
          <img src={idea} alt="Ideia" />
          <p>Despertando criações sem barreiras</p>
        </InfoCard>

        <InfoCard>
          <strong>Ambientes de inovação</strong>
          <img src={lamp} alt="Lâmpada" />
          <p>
            Oficinas em ambientes reais, possibilitando novas crenças e quebra
            de paradigmas.
          </p>
        </InfoCard>
      </InfoContainer>

      <SliderContainer>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
          bullets={false}
          className="slider"
        >
          {images.map(image => (
            <div key={image.id} data-src={image.url} />
          ))}
        </AutoplaySlider>
      </SliderContainer>

      <InfoNumberContainer>
        <InfoCard>
          <img src={smile} alt="Sorriso" />
          <h1>+ de 1000</h1>
          <p>Alunos impactados</p>
        </InfoCard>

        <InfoCard>
          <img src={idea} alt="Ideia" />
          <h1>30</h1>
          <p>Intervenções</p>
        </InfoCard>

        <InfoCard>
          <img src={lamp} alt="Lâmpada" />
          <h1>+ de 20</h1>
          <p>Professores impactados</p>
        </InfoCard>

        <InfoCard>
          <img src={idea} alt="Ideia" />
          <h1>5</h1>
          <p>Participando ativamente do programa</p>
        </InfoCard>
      </InfoNumberContainer>

      <ContactContainer>
        <form onSubmit={handleContanctSubmit}>
          <h1>
            Faça sua <br /> pré-matrícula
          </h1>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Celular" />
          <input type="text" placeholder="Mensagem" />
          <button type="submit">Enviar mensagem</button>
        </form>
      </ContactContainer>

      <Footer>
        <FooterCard initial="hidden" animate="visible">
          <strong>Redes sociais</strong>
          <SocialContent>
            <SocialButton>
              <FiFacebook size={25} color="#fff" />
            </SocialButton>

            <SocialButton>
              <FiInstagram size={25} color="#fff" />
            </SocialButton>

            <SocialButton>
              <FiMail size={25} color="#fff" />
            </SocialButton>
          </SocialContent>
        </FooterCard>
      </Footer>
    </Container>
  )
}

export default Home
