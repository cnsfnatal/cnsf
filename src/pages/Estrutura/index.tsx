import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Navbar from '../../components/NavBar';

import { 
  AboutContainer,
  Container,
  Header,
  TextContainer,
  ImagesWrapper,
  ImageContainer
} from './styles';

import logo from '../../assets/logo.png'
import fachada from '../../assets/fachada.png'


const Estrutura: React.FC = () => {
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

      <AboutContainer>
          <>

          <TextContainer
              variants={{
                hidden: { x: 0, y: 100, opacity: 0 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    when: 'beforeChildren',
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <strong>Estrutura</strong>
              <p>
              O Colégio Nossa Senhora de Fátima tem uma estrutura 
              planejada estrategicamente para atender cada fase de desenvolvimento 
              dos nossos alunos, distribuídos nos níveis da Educação Infantil, 
              Ensino Fundamental I e Ensino Fundamental II, com salas de aulas de áudios-visuais, informática, 
              laboratório de química, física, matemática e xadrez. Além disso, disponibilizamos 
              uma sala de motricidade ampla, 
              lógica-matemática, leitura, biblioteca, sala de dança, karatê, brinquedoteca, 
              sala de repouso, sala de oficina de artes, 
              quadra poliesportiva, espaço relacionais abertos e playground.
              </p>
            </TextContainer>

          <ImagesWrapper>
            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>
            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>
            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>

            <ImageContainer>
              <img src={fachada} alt="Fachada"/>
              <strong>Fachada</strong>
            </ImageContainer>
          </ImagesWrapper>



          </>
      </AboutContainer>
    </Container>
  )
}

export default Estrutura;