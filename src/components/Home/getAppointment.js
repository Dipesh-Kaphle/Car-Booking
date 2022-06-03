import { Row, Col, Image, Button } from "antd"
import Title from "antd/lib/typography/Title"
import React from "react"
import pricing from "../../assets/pricing.svg"
import { RightOutlined } from "@ant-design/icons"
import history from "../../utils/history"

const GetAppointment = () => {
  const onClickButton = () => {
    history.push("/app/car/valuation")
  }

  return (
    <Row className="getappoint-content">
      <Row gutter={[18, 16]}>
        <Col xl={14} xxl={14} md={14} sm={24} xs={24}>
          <Image
            preview={false}
            width="100%"
            src={pricing}
            style={{ height: " 450px", objectFit: "cover" }}
          />
        </Col>
        <Col xl={10} xxl={10} md={10} sm={24} xs={24}>
          <Row justify="center" gutter={[16, 16]}>
            <Col span={24}>
              <Title className="getappoint-title">
                Valuate Your Suzuki Cars
              </Title>
            </Col>
            <Col span={24}>
              <Title className="getappoint-text">
                You can valuate your car by providing your car details online.
              </Title>
            </Col>
            <Col span={24}>
              <Button className="common-button" onClick={onClickButton}>
                Get Valuation <RightOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  )
}
export default GetAppointment
