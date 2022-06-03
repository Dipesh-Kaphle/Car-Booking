import { Skeleton } from "antd"
import { isEmpty } from "lodash"
import React from "react"
import {
  MYBOOKING,
  MyWISHLIST,
  PRODUCT_LIST,
} from "../../utils/constants/appConfigs"
import { saveState } from "../../utils/storageUtil"

// import Home from "./home"
import Carousell from "./carousel"
import CompareCars from "./compareCar"
import GetAppointment from "./getAppointment"
import SingeImage from "./singleImage"
import Suggest from "./suggest"

const HomeComponent = (props) => {
  const { allProductList, bookCarList, fetchWishList } = props
  saveState(PRODUCT_LIST, allProductList?.data)
  saveState(MYBOOKING, bookCarList)
  saveState(MyWISHLIST, fetchWishList)

  return (
    <Skeleton loading={isEmpty(allProductList) ? true : false} active>
      <React.Fragment>
        {/* <Home {...props} /> */}
        <Carousell {...props} />
        <SingeImage {...props} />
        <GetAppointment {...props} />
        <CompareCars {...props} />
        <Suggest {...props} />
      </React.Fragment>
    </Skeleton>
  )
}

export default HomeComponent
