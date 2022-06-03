import React from "react"
import Layout from "../../components/Layout"

const asyncComponent = (importString) => {
  return React.lazy(() => import(`../${importString}`))
}

const AsyncComponents = [
  Layout,
  Layout,
  [
    [asyncComponent("Home"), ["/", "home", "dashboard"], "public"],
  [asyncComponent("Cardetail"), ["app/cardetail"], "public"],
  [asyncComponent("BlogPost"), ["app/blog/post"], "public"],
  [asyncComponent("SuggestCar"), ["app/suggest/car"], "public"],
  [asyncComponent("CarValuation"), ["app"], "public"],
  [asyncComponent("LatestCar"), ["short"], "public"],

  ],
]

export default AsyncComponents
