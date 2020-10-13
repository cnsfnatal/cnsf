import React, { useCallback, useState, useEffect } from 'react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { Map, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import api from '../../services/api'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'
import logo from '../../assets/logo.png'
import metologiaImage from '../../assets/metologia-image.png'
import smile from '../../assets/smile.png'
import idea from '../../assets/idea.png'
import lamp from '../../assets/lamp.png'
import school from '../../assets/school.svg'
import study from '../../assets/study.svg'
import teacher from '../../assets/teacher.svg'
import training from '../../assets/training.svg'

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

  const AutoplaySlider = withAutoplay(AwesomeSlider)

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
              <strong>Metologia</strong>
              <p>
                Acreditamos que a escola deve ser o lugar onde os alunos
                despertem sua criatividade, deem vidas aos seus sonhos e
                construam o seu próprio futuro. Além disso, atuamos com
                abordagens de ensino capazes de estimular diversificados
                pensamento na construção de conhecimentos, projetos e propósitos
                de vida!
              </p>
            </TextContainer>
          </>
        )}
      </AboutContainer>

      <InfoContainer>
        {inforCardAnimate && (
          <>
            <InfoCard
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
              <strong>Competências emocionais</strong>
              <img src={smile} alt="Sorriso" />
              <p>
                O trabalho em equipe, a empatia, a comunicação são pilares
                fundamentais para o crescimento pessoal e profissional
              </p>
            </InfoCard>

            <InfoCard
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
            >
              <strong>Mudança de Pensamento</strong>
              <img src={idea} alt="Ideia" />
              <p>Despertando criações sem barreiras</p>
            </InfoCard>

            <InfoCard
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
            >
              <strong>Ambientes de inovação</strong>
              <img src={lamp} alt="Lâmpada" />
              <p>
                Oficinas em ambientes reais, possibilitando novas crenças e
                quebra de paradigmas.
              </p>
            </InfoCard>
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
            <InfoCard
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
              <img src={study} alt="Sorriso" />
              <h1>+ de 1000</h1>
              <p>Alunos impactados</p>
            </InfoCard>

            <InfoCard
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
            >
              <img src={training} alt="Ideia" />
              <h1>30</h1>
              <p>Intervenções</p>
            </InfoCard>

            <InfoCard
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
            >
              <img src={teacher} alt="Lâmpada" />
              <h1>+ de 20</h1>
              <p>Professores impactados</p>
            </InfoCard>

            <InfoCard
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
            >
              <img src={school} alt="Ideia" />
              <h1>5</h1>
              <p>Participando ativamente do programa</p>
            </InfoCard>
          </>
        )}
      </InfoNumberContainer>

      <ContactContainer>
        <Map
          center={[-5.7972139, -35.212834]}
          zoom={15}
          style={{ width: '60%', height: '100%', borderRadius: '30px' }}
        >
          <Marker position={[-5.7677728, -35.2616655]} />

          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
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
