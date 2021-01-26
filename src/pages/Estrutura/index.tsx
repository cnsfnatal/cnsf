import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Navbar from '../../components/NavBar';
import { client } from '../../lib/prismic'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'

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

interface EstrutraProps {
  aboutme: any
  title: any
}

const Estrutura = () => {
  const [cards, setCards] = useState<Document[]>([])
  const [estrutura, setEstrutura] = useState<EstrutraProps>()

  useEffect(() => {
    async function handleGetImages() {
      const response = await client().query([
        Prismic.Predicates.at('document.type', 'imageestrutura')
      ]) 

      setCards(response.results)
    }

    handleGetImages()
  }, [])

  console.log(cards)


  useEffect(() => {
    async function handleGetCards() {
      const response = await client().query([
        Prismic.Predicates.at('document.type', 'estruturatext')
      ])
      
      // console.log(response)
      setEstrutura(response.results[0].data)
    }

    handleGetCards()
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
              <strong>  {estrutura  ?  PrismicDOM.RichText.asText(estrutura?.title) : 'Estrutura' }</strong>
              <p>
              {estrutura  ?  PrismicDOM.RichText.asText(estrutura?.aboutme) : 'Descrição' }
              </p>
            </TextContainer>

          <ImagesWrapper>

            {cards.map((card => (

            <ImageContainer key={card.id} >
              <img src={card.data.image.url} alt="Fachada"/>
              <strong>{cards  ?  PrismicDOM.RichText.asText(card.data.title) : 'Carregando...' }</strong>
            </ImageContainer>

            )))}


          </ImagesWrapper>



          </>
      </AboutContainer>
    </Container>
  )
}

export default Estrutura;