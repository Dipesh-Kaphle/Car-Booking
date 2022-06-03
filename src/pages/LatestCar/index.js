import React from "react"
import { Route } from "react-router-dom"
import ChildRoutes from "../../routes/childRoutes"
import Latestcar from "./latestCar"
import UpComming from "./upComingCar"
import MostViewedCar from "./mostViewerCar"
import termsConditions from "./terms & Conditions"
import sendFeedBack from "./sendFeedBack"
import FaqItem from './faq'
const Index = ({ match }) => {
  console.log("latest", match.url)
  return (
    <ChildRoutes>
      <Route exact path={`${match.url}/latest`} component={Latestcar} />
      <Route exact path={`${match.url}/upcoming`} component={UpComming} />
      <Route exact path={`${match.url}/mostview`} component={MostViewedCar} />
      <Route exact path={`${match.url}/terms/conditions`} component={termsConditions} />
      <Route exact path={`${match.url}/send/feedback`} component={sendFeedBack} />
      <Route exact path={`${match.url}/faq`} component={FaqItem} />

      
      
    </ChildRoutes>
  )
}

export default Index
