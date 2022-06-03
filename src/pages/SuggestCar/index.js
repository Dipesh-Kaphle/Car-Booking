import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import Suggest from './suggestCar'

const Index = ({ match }) => {
  return (
    <ChildRoutes>
      <Route exact path={match.url} component={Suggest} />
      {/* <Route exact path={`${match.url}/car/details`} component={CarPage}/> */}
    </ChildRoutes>
  )
}

export default Index