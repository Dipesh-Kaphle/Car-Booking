import "react-multi-carousel/lib/styles.css"
import React from "react"
import parse from "html-react-parser"
import { Row, Col, Typography, Image, Card, Button } from "antd"

import { RightOutlined } from "@ant-design/icons"
import history from "../../utils/history"
import { PRODUCT_ID, PRODUCT_LIST } from "../../utils/constants/appConfigs"
import { loadState, saveState } from "../../utils/storageUtil"
import Title from "antd/lib/typography/Title"

const UpComingCar = () => {
  const carDetailsList = loadState(PRODUCT_LIST)

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
            UpComing Car
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

export default UpComingCar
