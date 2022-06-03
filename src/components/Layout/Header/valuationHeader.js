import { Row, Col } from "antd"
import React from "react"

const ValuationHeader = () => {
  return (
    <Row className="headercontent">
      <Col span={24}>
        <Row justify="center" className="header-title">
          Free Car Valuation
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" className="header-text">
          Use our car valuation tool to find the approximate market value of
          your car.
        </Row>
      </Col>
    </Row>
  )
}
export default ValuationHeader
