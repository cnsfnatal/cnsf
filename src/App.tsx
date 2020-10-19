import React from 'react'

import './styles/global.scss'
import AppProvider from './hooks'

import Routes from './Routes'

// import Layout from './components/Layout'
// import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  )
}

export default App
