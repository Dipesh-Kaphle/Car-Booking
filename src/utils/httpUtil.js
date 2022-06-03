import { Api } from "./apiUtil"
// import qs from "qs"

export function fetch(endpoint, params = {}, contentType) {
  return Api(contentType, params).get(`/${endpoint}`, { params })
}

export function store(endpoint, data, contentType, noAuthorize) {
  return Api(contentType, {}, noAuthorize).post(`/${endpoint}`, data)
}

export function update(endpoint, data, contentType, noAuthorize) {
  return Api(contentType, {}, noAuthorize).put(`/${endpoint}`, data)
}

export function destroy(endpoint, id) {
  const apiEndpoint = id ? `/${endpoint}/${id}` : endpoint
  return Api().delete(apiEndpoint)
}

const request = (type) => {
  return {
    type: type,
  }
}

const requestSuccess = (type, data) => {
  return {
    type: type,
    data,
  }
}

const requestFailure = (type, data) => {
  return {
    type: type,
    data,
  }
}

export const get = (
  requestActionType,
  requestSuccessActionType,
  requestFailureActionType,
  api,
  params,
  contentType
) => {
  return (dispatch) => {
    dispatch(request(requestActionType))
    return fetch(api, params, contentType)
      .then((res) => {
        dispatch(requestSuccess(requestSuccessActionType, res?.data))
        return Promise.resolve(res?.data)
      })
      .catch((err) => {
        dispatch(requestFailure(requestFailureActionType, err?.data))
        return Promise.reject(err?.data)
      })
  }
}

export const postData = (
  requestActionType,
  requestSuccessActionType,
  requestFailureActionType,
  api,
  params,
  contentType
) => {
  return (dispatch) => {
    dispatch(request(requestActionType))
    return post(api, params, contentType)
      .then((res) => {
        dispatch(requestSuccess(requestSuccessActionType, res?.data))
        return res
      })
      .catch((err) => {
        dispatch(requestFailure(requestFailureActionType, err?.data))
        return err
      })
  }
}

export const post = async (api, params, contentType, noAuthorize) => {
  return await store(api, params, contentType, noAuthorize)
    .then((res) => {
      return Promise.resolve(res?.data)
    })
    .catch((err) => {
      return Promise.reject(err)
    })
}

export const put = async (api, params, contentType, noAuthorize) => {
  return await update(api, params, contentType, noAuthorize)
    .then((res) => {
      return Promise.resolve(res?.data)
    })
    .catch((err) => {
      return Promise.reject(err?.data)
    })
}

export const deleteData = async (api, id) => {
  return await destroy(api, id)
    .then((res) => {
      return Promise.resolve(res?.data)
    })
    .catch((err) => {
      return Promise.reject(err?.data)
    })
}
