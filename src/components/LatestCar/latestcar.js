import "react-multi-carousel/lib/styles.css"
import React from "react"
import { Row, Col, Typography, Image, Card, Button } from "antd"
import parse from "html-react-parser"

import { RightOutlined } from "@ant-design/icons"
import history from "../../utils/history"
import Title from "antd/lib/typography/Title"
import { PRODUCT_ID } from "../../utils/constants/appConfigs"
import { saveState } from "../../utils/storageUtil"
import { isAuthenticated } from "../../utils/authUtil"

const LatestCar = (props) => {
  const { carDetailsList } = props
  const handelRedirectDetail = (e, id) => {
    e.preventDefault()
    saveState(PRODUCT_ID, id)
    history.push("/app/cardetail")
  }
  return (
    <div className="carousel-wrapper myCarousel" style={{ marginTop: "96px" }}>
      <Row className="carousel-title">
        <Col span={20}>
          <Typography.Text className="carouseltext">
            Latest Cars
          </Typography.Text>
        </Col>
        <Col span={20}>
          <Typography.Text className="carousellatest">
            Explore the Latest Cars with Fourwheel Nepal.
          </Typography.Text>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {carDetailsList?.map((item) => (
          <Col xl={8} xxl={8} xs={24} sm={24} md={12}>
            <Card
              cover={<Image src={item.product_thumbnail} preview={false} />}
            >
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <h3>{item.product_name}</h3>
                </Col>
                <Col>
                  <h5>Rs. {item.price}</h5>
                </Col>
                <Col>{parse(`${item.description.slice(0, 200)}`)}</Col>
                <Col>
                  <Button
                    className="common-button"
                    onClick={(e) => handelRedirectDetail(e, item.product_id)}
                  >
                    Read More <RightOutlined />
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default LatestCar
