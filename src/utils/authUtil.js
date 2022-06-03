import moment from "moment"
import { loadState, removeState } from "./storageUtil"
import { FOURWHILE_NEPAL } from "./constants/appConfigs"

export let isTokenExpired = () => {
  const expiresIn = loadState(FOURWHILE_NEPAL)
    ?.data?.access_token?.[`.expires`]?.split(",")
    .join(" ")
  if (moment(expiresIn).valueOf() > Date.now()) {
    // Checking if token is expired.
    return true
  } else {
    removeState(FOURWHILE_NEPAL)
    return false
  }
}

export let isAuthenticated = () => {
  return loadState(FOURWHILE_NEPAL)?.data?.access_token
}
