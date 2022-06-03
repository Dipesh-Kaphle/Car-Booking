import { Col, Row, Typography } from "antd"
import React from "react"
import { geocoder } from "../../services/commonService"
import "./common.scss"

const AutoSuggestions = ({
  suggestions,
  setAddress,
  setSuggestions,
  form,
  setGeometry,
  isPostJob,
}) => {
  return (
    <div className="auto-suggestions">
      {suggestions.map((item, index) => (
        <div
          className="auto-suggestions--text"
          key={item?.id}
          onClick={async () => {
            setAddress(item?.name)
            isPostJob
              ? form.setFieldsValue({
                  job_location: item?.name,
                })
              : form.setFieldsValue({
                  address: item?.name,
                })
            setSuggestions(null)
            const geometry = await geocoder(item?.name)
            setGeometry(geometry)
          }}
        >
          <Typography.Text>{item?.name}</Typography.Text>
        </div>
      ))}
    </div>
  )
}

export default AutoSuggestions
