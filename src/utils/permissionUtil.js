import { loadState } from "../utils/storageUtil"
import { FOURWHILE_NEPAL } from "./constants/appConfigs"

export let isAllowed = (permissionCode) => {
  const permissions = [loadState(FOURWHILE_NEPAL)?.data?.access_token]
  let isAuthorized = false
  Array.isArray(permissionCode) &&
    permissionCode.forEach((code) => {
      if (Array.isArray(permissions) && permissions.includes(code)) {
        isAuthorized = true
      }
    })
  return isAuthorized
}
