import React, { useCallback, useState, useEffect } from 'react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

import 'leaflet/dist/leaflet.css'
import api from '../../services/api'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'
import logo from '../../assets/logo.png'
import metologiaImage from '../../assets/metologia-image.png'

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

const itemAnimationUpY = {
  hidden: { x: 0, y: 100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const itemAnimationDownY = {
  hidden: { x: 0, y: -100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

function Home() {
  const [images, setImages] = useState([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [celular, setCelular] = useState('')
  const [lastYPosition, setLatYPosition] = useState(0)
  const [scrollAboutAnimate, setScroolAboutAnimate] = useState(false)
  const [inforCardAnimate, setInforCardAnimate] = useState(false)
  const [inforCardNumberAnimate, setInforCardNumberAnimate] = useState(false)
  const [formAnimate, setFormAnimate] = useState(false)
  const [textIntroduction, setTextIntroduction] = useState([])
  const [cardText, setCardText] = useState([])
  const [cardNumber, setCardNumber] = useState([])

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  useEffect(() => {
    async function getCardNumberIntroduciton() {
      const response = await api.get('/card-number')

      setCardNumber(response.data)
    }

    getCardNumberIntroduciton()
  }, [])

  useEffect(() => {
    async function getCardTextIntroduciton() {
      const response = await api.get('/card-text')

      setCardText(response.data)
    }

    getCardTextIntroduciton()
  }, [])

  useEffect(() => {
    async function getTextIntroduciton() {
      const response = await api.get('/introduction-text')

      setTextIntroduction(response.data)
    }

    getTextIntroduciton()
  }, [])

  useEffect(() => {
    api.get('/image').then(image => {
      setImages(image.data)
    })
  }, [])

  useEffect(() => {
    function handleScroll() {
      setLatYPosition(window.scrollY)

      if (window.scrollY >= 420) {
        setScroolAboutAnimate(true)
      }

      if (window.scrollY >= 1000) {
        setInforCardAnimate(true)
      }

      if (window.scrollY >= 2400) {
        setInforCardNumberAnimate(true)
      }

      if (window.scrollY >= 2800) {
        setFormAnimate(true)
      }
    }
    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scrool', handleScroll, false)
    }
  }, [lastYPosition])

  const handleSubmitEmail = useCallback(
    async event => {
      event.preventDefault()

      const sendEmail = await api.post('/mail', {
        email: email,
        nome: nome,
        mensagem: mensagem,
        numero: celular
      })

      if (sendEmail.status === 200) {
        alert(`Recebemos sua mensagem ${nome}, entraremos em contato em breve.`)
      }
    },
    [nome, mensagem, celular, email]
  )

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
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemAnimationDownY}
          >
            COLÉGIO NOSSA SENHORA DE FÁTIMA
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemAnimationUpY}
          >
            Uma educação para a inovação!
          </motion.p>
        </div>
        <video autoPlay muted loop className="video-banner">
          <source src={Video} type="video/mp4" />
        </video>
      </VideoArea>

      <AboutContainer>
        {scrollAboutAnimate && (
          <>
            <ImageContent
              variants={{
                hidden: { x: 0, y: 100, opacity: 0 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    when: 'beforeChildren',
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <img src={metologiaImage} alt="Crianças se divertindo" />
            </ImageContent>

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
              <strong>{textIntroduction[0]?.title}</strong>
              <p>{textIntroduction[0]?.paragraph}</p>
            </TextContainer>
          </>
        )}
      </AboutContainer>

      <InfoContainer>
        {inforCardAnimate && (
          <>
            {cardText.map(card => (
              <InfoCard
                key={card.id}
                variants={{
                  hidden: { x: 0, y: 100, opacity: 0 },
                  visible: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      when: 'beforeChildren',
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <strong>{card.tile}</strong>
                <img src={card.url} alt={card.title} />
                <p>{card.paragraph}</p>
              </InfoCard>
            ))}
          </>
        )}
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
        {inforCardNumberAnimate && (
          <>
            {cardNumber.map(card => (
              <InfoCard
                key={card.id}
                variants={{
                  hidden: { x: 0, y: 100, opacity: 0 },
                  visible: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      when: 'beforeChildren',
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <img src={card.url} alt={card.title} />
                <h1>{card.number_text}</h1>
                <p>{card.paragraph}</p>
              </InfoCard>
            ))}
          </>
        )}
      </InfoNumberContainer>

      <ContactContainer>
        <form onSubmit={handleSubmitEmail}>
          <motion.h1
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            Faça sua <br /> pré-matrícula
          </motion.h1>
          <motion.input
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            type="text"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <motion.input
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.8,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            type="text"
            placeholder="Nome"
            onChange={e => setNome(e.target.value)}
            required
          />
          <motion.input
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            type="text"
            placeholder="Celular"
            onChange={e => setCelular(e.target.value)}
            required
          />
          <motion.input
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.2,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            type="text"
            placeholder="Mensagem"
            onChange={e => {
              setMensagem(e.target.value)
            }}
            required
          />
          <motion.button
            variants={{
              hidden: { x: 0, y: 100, opacity: 0 },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.4,
                  when: 'beforeChildren',
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
            type="submit"
          >
            Enviar mensagem
          </motion.button>
        </form>
      </ContactContainer>

      <Footer>
        <FooterCard initial="hidden" animate="visible">
          <strong>Redes sociais</strong>
          <SocialContent>
            <SocialButton
              target="_blank"
              href="https://www.facebook.com/cnsfnataloficial"
            >
              <FiFacebook size={25} color="#fff" />
            </SocialButton>

            <SocialButton
              target="_blank"
              href="https://www.instagram.com/cnsfnataloficial/?hl=pt-br"
            >
              <FiInstagram size={25} color="#fff" />
            </SocialButton>
          </SocialContent>
        </FooterCard>
      </Footer>
    </Container>
  )
}

export default Home
