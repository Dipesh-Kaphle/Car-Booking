import React, { Fragment } from "react"
import { withRouter, Switch } from "react-router-dom"
import PrivateRoute from "../../routes/privateRoute"
import RestrictRoute from "../../routes/restrictRoute"
import PublicRoute from "../../routes/publicRoute"
import NotFound from "../../components/Exceptions/404NotFound"
import Unauthorized from "../../components/Exceptions/403Unauthorized"
import AsyncComponents from "./AsyncComponent"
import { isAuthenticated } from "../../utils/authUtil"

const RouteTo = (...params) => {
  const pathAndComponent = [...params]

  return pathAndComponent?.map((mainItem) => {
    const paths = [...mainItem[1]]
    return paths?.map((path) => {
      if (mainItem[2] === "restricted") {
        return (
          <RestrictRoute
            exact={!path || path === "/"}
            path={`/${path}`}
            layout={AsyncComponents[0]}
            component={withRouter(mainItem[0])}
          />
        )
      } else if (mainItem[2] === "public") {
        return (
          <PublicRoute
            exact={!path || path === "/"}
            path={`/${path}`}
            layout={AsyncComponents[0]}
            component={withRouter(mainItem[0])}
          />
        )
      }
      return (
        <PrivateRoute
          exact={!path || path === "/"}
          path={`/app/${path}`}
          layout={AsyncComponents[1]}
          component={withRouter(mainItem[0])}
        />
      )
    })
  })
}
const App = () => {
  return (
    <Fragment>
      <Switch>
        {RouteTo(...AsyncComponents[2])}
        <PrivateRoute
          path={`/app/403`}
          layout={AsyncComponents[0]}
          component={withRouter(Unauthorized)}
        />
        {!isAuthenticated() ? (
          <PublicRoute
            layout={AsyncComponents[0]}
            component={withRouter(NotFound)}
          />
        ) : (
          <PrivateRoute
            layout={AsyncComponents[0]}
            component={withRouter(NotFound)}
          />
        )}
      </Switch>
    </Fragment>
  )
}
export default App
