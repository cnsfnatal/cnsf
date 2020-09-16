import React from 'react'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

import Video from '../../assets/cnsf_video.mp4'

import { Container, VideoArea } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Layout>
        <Navbar />
      </Layout>

      <VideoArea>
        <video autoPlay muted loop className="video-banner">
          <source src={Video} type="video/mp4" />
        </video>
      </VideoArea>
    </Container>
  )
}

export default Home
