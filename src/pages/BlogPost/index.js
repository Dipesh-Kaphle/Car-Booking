import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import BlogPage from './blogpost'

const Index = ({ match }) => {
  return (
    <ChildRoutes>
      <Route exact path={match.url} component={BlogPage} />
      {/* <Route exact path={`${match.url}/car/details`} component={CarPage}/> */}
    </ChildRoutes>
  )
}

export default Index
