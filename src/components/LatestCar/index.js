import React from "react"
import { PRODUCT_LIST } from "../../utils/constants/appConfigs"
import { loadState } from "../../utils/storageUtil"
import LatestCar from "./latestcar"

const LatestCarIndex = (props) => {
  const carDetailsList = loadState(PRODUCT_LIST)
  return (
    <React.Fragment>
      <LatestCar carDetailsList={carDetailsList} />
    </React.Fragment>
  )
}

export default LatestCarIndex
