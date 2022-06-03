import { Row, Col } from "antd"
import React from "react"

const SuggestHeader = () => {
  return (
    <Row className="headercontent">
      <Col span={24}>
        <Row justify="center" className="header-title">
          Confused which car to buy?
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" className="header-text">
          Let us help you find the dream car. We suggest you the best car under
          your budget
        </Row>
      </Col>
    </Row>
  )
}
export default SuggestHeader
