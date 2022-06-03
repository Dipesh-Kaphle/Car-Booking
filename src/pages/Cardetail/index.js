import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import CarPage from './cardDetail'
const Index = ({ match }) => {
  return (
    <ChildRoutes>
      <Route exact path={match.url} component={CarPage} />
    </ChildRoutes>
  )
}

export default Index
