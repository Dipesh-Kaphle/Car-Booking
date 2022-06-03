import React from "react"
import { MYBOOKING, PRODUCT_LIST } from "../../utils/constants/appConfigs"
import { loadState, saveState } from "../../utils/storageUtil"
import Blog from "./blog"
import CarDetail from "./cardetails"
import Carousels from "./releted"

const CarInfo = (props) => {
  const carDetailsList = loadState(PRODUCT_LIST)
  saveState(MYBOOKING, props.bookCarList)
  const { BookCarByparam, AddWishLists, MyBookCar } = props
  return (
    <React.Fragment>
      <CarDetail
        carDetailsList={carDetailsList}
        BookCarByparam={BookCarByparam}
        MyBookCar={MyBookCar}
        AddWishLists={AddWishLists}
      />
      {/* <Carousels
        carDetailsList={carDetailsList}
        BookCarByparam={BookCarByparam}
      /> */}
      {/* <Blog carDetailsList={carDetailsList} /> */}
    </React.Fragment>
  )
}
export default CarInfo
