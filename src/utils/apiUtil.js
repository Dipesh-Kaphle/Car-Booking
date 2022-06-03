import axios from "axios"
import { loadState } from "./storageUtil"
import { FOURWHILE_NEPAL } from "../utils/constants/appConfigs"
import { isEmpty } from "./commonUtils"

const BASE_URL = process.env.REACT_APP_API_ENDPOINT

export const Api = (
  contentType = "application/json",
  params = {}
  // noAuthorize
) => {
  const header = loadState(FOURWHILE_NEPAL)?.data
    ? {
        "Content-Type": contentType,
        Accept: "application/json",
        Authorization: `Bearer ${loadState(FOURWHILE_NEPAL)?.data?.access_token}`,
      }
    : {
        "Content-Type": contentType,
        Accept: "application/json",
      }
  const config = !isEmpty(params)
    ? {
        baseURL: `${BASE_URL}`,
        headers: header,
        responseType: "json",
      }
    : { baseURL: `${BASE_URL}`, headers: header, responseType: "json" }

  const api = axios.create(config)

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error?.response)
    }
  )

  return api
}
