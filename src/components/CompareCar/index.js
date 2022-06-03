import React from "react"
import { COMPARE_CAR } from "../../utils/constants/appConfigs"
import { loadState } from "../../utils/storageUtil"
import Suggest from "../Home/suggest"
import MostViewerCar from "../LatestCar/mostViewerCar"
import CarColor from "./carColor"
import CompareTable from "./compareTable"
import CompareTitle from "./compareTitle"

const Carvalue = (props) => {
  const data = loadState(COMPARE_CAR)
  return (
    <React.Fragment>
      <CompareTitle data={data} />
      {/* <CompareTable data={data}/> */}
      {/* <CarColor data={data}/> */}
      {/* <MostViewerCar data={data}/> */}
      {/* <Suggest data={data} {...props}/> */}
    </React.Fragment>
  )
}
export default Carvalue
