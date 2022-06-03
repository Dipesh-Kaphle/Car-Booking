import React, { createContext, useState } from "react"

import { Notification } from "../Common/AntdComponents"
import { isAuthenticated } from "../../utils/authUtil"
import { FOURWHILE_NEPAL } from "../../utils/constants/appConfigs"
import history from "../../utils/history"
import { removeState, saveState } from "../../utils/storageUtil"
import { get, post } from "../../utils/httpUtil"
import {
  FETCH_MYWISH_LIST,
  FETCH_MYWISH_LIST_SUCCESS,
  FETCH_MYWISH_LIST_FAILURE,

} from "../../utils/constants/actionTypes"
const AuthContext = createContext({
  user: {},
  isAuthenticated: false,
})
const AuthProvider = (props) => {
  const [user, setUser] = useState({})
 
  const [loginLoading, setLoginLoading] = useState(false)
  const [signUpLoading, setSignUpLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [authenticated] = useState(isAuthenticated() || false)
  const state = {
    user,
    setUser,
    loginLoading,
    signUpLoading,
    authenticated,
    setLoginLoading,
    setSignUpLoading,
    message,
    setMessage,
  }

  const handleLogin = async (user, callback) => {
    return post(`login`, user)
      .then((response) => {
        callback && callback(false)
        saveState(FOURWHILE_NEPAL, response)
        history.push("/dashboard")

        Notification("Success!", "Login successful!", "success")
      })
      .catch((err) => {
        callback && callback(false)

        Notification("Error!", `${err.data.message}`, "error")
      })
  }

  const handleSignUp = (user, callback) => {
    return post(`signup`, user)
      .then((response) => {
        callback && callback(false)
        saveState(FOURWHILE_NEPAL, response)
        Notification(
          "Success!",
          "Customer register Successfully.",
          "success"
        )
        history.push("/dashboard")

      })
      .catch((err) => {
        if (
          err?.data?.email?.[0] ===
          "This email already taken please choose another."
        ) {
          callback && callback(false)
          Notification(
            "Error!",
            "This email is already taken. Please enter another email.",
            "error"
          )
        } else {
          callback && callback(false)
          Notification("Error!", "Input Field Required!", "error")
        }
      })
  }

  const logout = () => {
    removeState(FOURWHILE_NEPAL)
    setUser(null)
    history.push(`/home`)
  }
 const mywishList = () => {
    return get(
      FETCH_MYWISH_LIST,
      FETCH_MYWISH_LIST_SUCCESS,
      FETCH_MYWISH_LIST_FAILURE,
      `wishes`
    )
  }
  const deleteWishList=async (id,callback,bncllback) => {
    return post(`wish/delete/${id}`)
    .then((response) => {
      callback && callback(response)
      bncllback && bncllback(true)
      Notification("Success!", "delete successful!", "success")
      history.push('/')
    })
    .catch((err) => {

      Notification("Error!", `${err.data.message}`, "error")
    })

  }
  
  return (
    <AuthContext.Provider
      {...props}
      value={{
        ...state,
        handleLogin: handleLogin,
        handleSignUp: handleSignUp,
        logout: logout,
        deleteWishList:deleteWishList,
        mywishList:mywishList
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
