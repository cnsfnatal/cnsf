import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'
import logo from '../../assets/logo.png'

import { Container, Header, VideoArea } from './styles'

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
    </Container>
  )
}

export default Home
