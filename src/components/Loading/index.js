import React from "react"
import Loader from "./loader"

const Loading = (props) => {
  if (props.error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Error! Please refresh the page
      </div>
    )
  } else if (props.pastDelay) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Loader />{" "}
      </div>
    )
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Loader />{" "}
      </div>
    )
  }
}

export default Loading
