import React from 'react'
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDomRoute
} from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}
const Routes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return <Component />
      }}
    />
  )
}

export default Routes
