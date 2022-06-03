import React, { Suspense } from "react"
import { Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "../utils/authUtil"
import LoadingComponent from "../components/Loading"

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          )
        }
        return (
          <Layout>
            <Suspense fallback={<LoadingComponent />}>
              <Component {...props} />
            </Suspense>
          </Layout>
        )
      }}
    />
  )
}

export default PrivateRoute
