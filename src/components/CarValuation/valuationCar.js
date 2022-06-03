import React from "react"
import { Row, Col, Button } from "antd"
import Title from "antd/lib/typography/Title"
import history from "../../utils/history"
import { loadState } from "../../utils/storageUtil"
import { CARVALATION, PRODUCT_LIST } from "../../utils/constants/appConfigs"
const ValuationCar = () => {
  const Carvaluation = loadState(CARVALATION)
  console.log("valu", Carvaluation)
  const anotherValuation = (e) => {
    e.preventDefault(e)
    history.push("/app/car/valuation")
  }

  return (
    <Row className="valuation-content">
      <Col span={24}>
        <Row className="valuation-car">
          <Col
            span={12}
            style={{
              background: "rgba(38, 38, 38, 0.42",
              padding: " 40px",
              height: "550px",
            }}
          >
            <Row justify="end" className="cover-title" gutter={[8, 32]}>
              <Col span={24}>
                <Title className="valuation-title">
                  Current Market value: RS.{Carvaluation?.car_value}
                </Title>
              </Col>
              <Col span={24}>
                <Title className="valuation-name">Maruti Suzuki</Title>
              </Col>
              <Col span={24}>
                <Title className="valuation-name">{Carvaluation?.kms} Km</Title>
              </Col>
              <Col span={24}>
                <Row justify="end">
                  <Button
                    className="common-button"
                    onClick={(e) => anotherValuation(e)}
                  >
                    Get another Valuation
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Title className="valuation-disc">
          Terms and conditions: Cartell in conjunction with Carzone uses details
          such as a car’s year and mileage to calculate its approximate market
          value. This valuation does not take a car’s condition, optional
          extras, service history, market demand and other factors into account,
          which will change its market value. This valuation is strictly
          intended for guidance purposes only when selling a car privately, and
          it does not represent a car’s value on trade-in.
        </Title>
      </Col>
    </Row>
  )
}
export default ValuationCar
