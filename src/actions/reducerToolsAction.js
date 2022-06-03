import { REDUCER_CLEAN_REQUEST } from "../utils/constants/actionTypes"

export const reducerCleanRequest = () => {
  return {
    type: REDUCER_CLEAN_REQUEST,
  }
}

export const headingRequest = (data) => {
  return {
    type: "HEADING",
    data,
  }
}
