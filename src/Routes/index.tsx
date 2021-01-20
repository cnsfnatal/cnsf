import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Route'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Estrutura from '../pages/Estrutura'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SignIn} path="/login" />
        <Route component={Estrutura} path="/estrutura" />
        <Route component={Dashboard} path="/dashboard" isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
