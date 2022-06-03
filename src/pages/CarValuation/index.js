import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import CarValuation from './carValuation'
import ValuationCar from './valuationCar'
import Compare from './compareCar'
import About from './aboutUs'
const Index = ({ match }) => {
  return (
    <ChildRoutes>
      <Route exact path={`${match.url}/car/valuation`} component={CarValuation} />
      <Route exact path={`${match.url}/valuation`} component={ValuationCar}/>
      <Route exact path={`${match.url}/compare`} component={Compare}/>
      <Route exact path={`${match.url}/aboutus`} component={About}/>

    </ChildRoutes>
  )
}

export default Index
