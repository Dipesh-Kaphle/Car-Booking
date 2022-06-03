import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import NotFound from "../components/Exceptions/404NotFound"

const ChildRoutes = ({ children }) => {
  return (
    <Fragment>
      <Switch>
        {children}
        <Route render={(props) => <NotFound />} />
      </Switch>
    </Fragment>
  )
}

export default ChildRoutes
