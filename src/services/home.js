import {
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
  FETCH_BOOKCAR_LIST,
  FETCH_BOOKCAR_LIST_SUCCESS,
  FETCH_MYWISH_LIST,
  FETCH_MYWISH_LIST_SUCCESS,
  FETCH_MYWISH_LIST_FAILURE,
  FETCH_BOOKCAR_LIST_FAILURE,
  FETCH_FAQ_LIST,
  FETCH_FAQ_LIST_SUCCESS,
  FETCH_FAQ_LIST_FAILURE,
} from "../utils/constants/actionTypes"
import history from "../utils/history"
import { Notification } from "../components/Common/AntdComponents"
import { get, post } from "../utils/httpUtil"
import axios from "axios"
import { saveState } from "../utils/storageUtil"
import {
  COMPARE_CAR,
  SUGGEST,
  CARVALATION,
} from "../utils/constants/appConfigs"

//compare care
export const compareByIdList = (formData, callback) => async (dispatch) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_ENDPOINT}compare`,

      { product_ids: formData }
    )
    .then((res) => {
      Notification("Success!", "successfully!", "success")
      callback && callback(false)
      saveState(COMPARE_CAR, res)
      history.push("/app/compare")
    })
    .catch((err) => {
      callback && callback(false)
      Notification("Error!", `${err?.message}`, "error")
    })
}

// product List

export const fetchProductList = () => {
  return get(
    FETCH_PRODUCT_LIST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    `products`
  )
}
//carValuation
export const carValuation = (formData, callback) => async (dispatch) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_ENDPOINT}valuation`,

      formData
    )
    .then((res) => {
      callback && callback(false)
      saveState(CARVALATION, res?.data)
      history.push("/app/valuation")
      return Notification("Success!", "successfully!", "success")
    })
    .catch((err) => {
      callback && callback(false)
      Notification("Error!", `${err?.data?.message}`, "error")
    })
}
export const suggestCar = (formData, callback) => async (dispatch) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_ENDPOINT}suggest`,

      formData
    )
    .then((res) => {
      Notification("Success!", "successfully!", "success")
      callback && callback(false)
      saveState(SUGGEST, res.data)
      history.push("app/suggest/car")
    })
    .catch((err) => {
      callback && callback(false)
      Notification("Error!", `${err?.message}`, "error")
    })
}
//bookCar
// export const bookCar = (formData,callback,isBook) => async (dispatch) => {
//   await axios
//     .post(
//       `${process.env.REACT_APP_API_ENDPOINT}book`,

//      formData
//     )
//     .then((res) => {
//       Notification("Success!", "successfully!", "success")
//       callback && callback(false)
//       isBook && isBook(true)

//     })
//     .catch((err) => {
//       callback && callback(false)
//       isBook && isBook(true)
//       Notification("Error!", `${err}`, "error")
//     })
// }
export const bookCar = (formData, callback, isBook) => async (dispatch) => {
  post(`book`, formData)
    .then((res) => {
      Notification("Success!", "successfully!", "success")
      callback && callback(false)
      isBook && isBook(true)
    })
    .catch((err) => {
      callback && callback(false)
      isBook && isBook(true)
      Notification("Error!", `${err}`, "error")
    })
}
export const myBookCar = () => {
  return get(
    FETCH_BOOKCAR_LIST,
    FETCH_BOOKCAR_LIST_SUCCESS,
    FETCH_BOOKCAR_LIST_FAILURE,
    `book-list`
  )
}

export const addwishList = (id, callback) => async (dispatch) => {
  post(`wish/add`, id)
    .then((res) => {
      Notification("Success!", "successfully!", "success")
      callback && callback(false)
    })
    .catch((err) => {
      callback && callback(false)
      Notification("Error!", `${err}`, "error")
    })
}
export const mywishList = () => {
  return get(
    FETCH_MYWISH_LIST,
    FETCH_MYWISH_LIST_SUCCESS,
    FETCH_MYWISH_LIST_FAILURE,
    `wishes`
  )
}
//send feedback
export const feedback = (formData, callback) => async (dispatch) => {
  post(`feedback`, formData)
    .then((res) => {
      Notification("Success!", "Your Feedback has been received, We apprecite your time", "success")
      callback && callback(false)
    })
    .catch((err) => {
      callback && callback(false)
      Notification("Error!", `${err}`, "error")
    })
}
//fetchFaq
export const fetchFaq = () => {
  return get(
    FETCH_FAQ_LIST,
    FETCH_FAQ_LIST_SUCCESS,
    FETCH_FAQ_LIST_FAILURE,
    `faq`
  )
}