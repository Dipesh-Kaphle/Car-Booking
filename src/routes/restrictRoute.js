import React, { Suspense } from "react"
import { Redirect, Route } from "react-router-dom"
import Loading from "../components/Loading"
import { isAuthenticated } from "../utils/authUtil"

const RestrictRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location },
            }}
          />
        ) : (
          <Layout>
            <Suspense fallback={<Loading />}>
              <Component {...props} />
            </Suspense>
          </Layout>
        )
      }
    />
  )
}

export default RestrictRoute
