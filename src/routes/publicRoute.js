import React, { Suspense } from "react"
import { Route } from "react-router-dom"
import LoadingComponent from "../components/Loading"

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // authorised so return component
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

export default PublicRoute
