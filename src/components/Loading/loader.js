import React from "react"
import { Spin } from "antd"

const Loader = ({ center = true }) => {
  if (center) {
    return (
      <div>
        <Spin size="large" />
      </div>
    )
  }
  return <Spin tip="Loading..." size="large" />
}

export default Loader
