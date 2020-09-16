import React from 'react'

import { Container } from './styles'

import Navbar from '../../components/NavBar'
import Layout from '../../components/Layout'

function Home() {
  return (
    <Container>
      <Layout>
        <Navbar />
      </Layout>
    </Container>
  )
}

export default Home
