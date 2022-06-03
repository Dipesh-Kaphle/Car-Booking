import {
  HeartOutlined,
  PhoneOutlined,
  RightOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons"
import { Card, Col, Image, Rate, Row, Tag } from "antd"
import Title from "antd/lib/typography/Title"
import React, { useState } from "react"
import CarDetails from "../../utils/constants/carDetails"
import Download from "./download"
import BookCar from "./bookCar"
import { loadState } from "../../utils/storageUtil"
import { PRODUCT_ID } from "../../utils/constants/appConfigs"
import history from "../../utils/history"

const CarDetail = (props) => {
  const { carDetailsList, BookCarByparam, MyBookCar, AddWishLists } = props
  const [downloadVisiable, setDownloadVisiable] = useState(false)
  const [bookcarVisable, setBookCarVisiable] = useState(false)
  const [productId, setProductId] = useState()
  const Id = loadState(PRODUCT_ID)

  const handelAddWishList = (e, id) => {
    history.push('/home')

    const product_id = {
      product_id: id,
    }
    AddWishLists(product_id)
  }
  const handelDownload = () => {
    setDownloadVisiable(true)
  }
  const handelBookCar = (e, id) => {
    e.preventDefault()
    setBookCarVisiable(true)
    setProductId(id)
  }
  return (
    <Row className="description-content">
      <Row gutter={[30, 8]}>
        <Col xl={12} xxl={12} md={12} sm={24} xs={12}>
          <Col span={24}>
            <Title className="description-title">Description</Title>
          </Col>
          {CarDetails?.map((item) => (
            <Row gutter={[16, 16]}>
              <Col span={24}>{item.discription}</Col>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Title className="description-title">
                      Key Specification
                    </Title>
                  </Col>

                  {item?.specification?.map((item) => (
                    <Col span={12}>
                      <Card>
                        <Row>
                          <Col span={24}>
                            <Title className="specific-title">
                              {item.icon} {item.name}
                            </Title>
                          </Col>
                          <Col span={24}>
                            <Title className="specific-title">
                              {item.price}
                            </Title>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
              {/* <Col span={24}>
                <Row>
                  <Title className="specific-title">Watch Video</Title>
                </Row>
                {item.vedio}
              </Col> */}
              <Col span={24}>
                <Row className="userreview">
                  <Title className="specific-title">User Reviews</Title>
                  <Rate defaultValue={5} style={{ color: "red" }} />
                </Row>
                <Row gutter={[16, 16]}>
                  {item.review.map((item) => (
                    <Col span={24}>
                      <Card>
                        <Row>
                          <Col span={24}>{item.discription}</Col>
                        </Row>
                        <Row className="userreview">
                          <Col>
                            <Row className="username">
                              <Title className="specific-title">
                                {item.name}
                              </Title>
                              <Title className="special-time">
                                {item.time}
                              </Title>
                            </Row>
                          </Col>
                          <Col>
                            <Rate defaultValue={5} style={{ color: "red" }} />
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Title className="specific-title">FAQs</Title>
                  </Col>
                  {item.faq.map((item) => (
                    <Col span={24}>
                      <Card>
                        <Row>
                          <Col span={24}>
                            <Title className="specific-title">
                              {item.name}
                            </Title>
                          </Col>
                          <Col span={24}>{item.description}</Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xl={12} xxl={12} md={12} sm={24} xs={12}>
          {carDetailsList
            ?.filter((item) => item.product_id === Id)
            ?.map((item) => (
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title className="detail-name">{item.product_name}</Title>
                </Col>
                <Col span={24}>
                  <Title className="detail-price">Rs: {item.price}</Title>
                </Col>
                <Col span={24}>
                  <Card className="mainimage-card">
                    <Row justify="center">
                      <Col span={24}>
                        <Image
                          src={item.product_thumbnail}
                          preview={false}
                          width={500}
                        />
                        ,
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={24}>
                  <Tag
                    className="book-car"
                    onClick={(e) => handelBookCar(e, item.product_id)}
                  >
                    <Title className="bookcar-title">Book This Car </Title>
                    <RightOutlined style={{ color: "white" }} />
                  </Tag>
                </Col>
                <Col span={24}>
                  <Tag
                    className="wishlist"
                    onClick={(e) => handelAddWishList(e, item.product_id)}
                  >
                    <Title className="wishlist-title">
                      <HeartOutlined style={{ color: "white" }} />
                      Add To Wishlist
                    </Title>
                    <RightOutlined style={{ color: "white" }} />
                  </Tag>
                </Col>
                <Col span={24}>
                  <Tag className="download" onClick={(e) => handelDownload(e)}>
                    <Title className="download-title">
                      <VerticalAlignBottomOutlined />
                      Download Brochure
                    </Title>
                    <RightOutlined />
                  </Tag>
                </Col>

                <Col span={24}>
                  <Tag className="download">
                    <Title className="download-title">
                      <PhoneOutlined />
                      Quick Contact : 98XXXXXXXX, 01-XXXXXXX
                    </Title>
                    <RightOutlined />
                  </Tag>
                </Col>
              </Row>
            ))}
        </Col>
        {downloadVisiable && (
          <Download
            onDownloadVisiable={(e) => setDownloadVisiable(e)}
            downloadVisiable={downloadVisiable}
          />
        )}
        {bookcarVisable && (
          <BookCar
            onBookcarVisiable={(e) => setBookCarVisiable(e)}
            bookcarVisable={bookcarVisable}
            productId={productId}
            BookCarByparam={BookCarByparam}
            MyBookCar={MyBookCar}
          />
        )}
      </Row>
    </Row>
  )
}
export default CarDetail
