import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Dashboard} path="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
