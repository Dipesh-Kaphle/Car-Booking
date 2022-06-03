import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import Home from "./home"


const Index = ({ match }) => {
  return (
    <ChildRoutes>
      <Route exact path={match.url} component={Home} />
     
    </ChildRoutes>
  )
}

export default Index
