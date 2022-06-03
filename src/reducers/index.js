import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../utils/history"
import { allProductList } from "./allProductList"
import { bookCarList } from "./myBooking"
import { fetchWishList } from "./myWishList"
import { Faqlist } from "./faq"

const appReducer = combineReducers({
  router: connectRouter(history),
  allProductList: allProductList,
  bookCarList: bookCarList,
  fetchWishList: fetchWishList,
  Faqlist:Faqlist
})

const rootReducer = (state, action) => {
  if (action && action.type === "SIGN_OUT") {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
