import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import parse from "html-react-parser"

import { Row, Col, Typography, Image, Card, Button, Tag } from "antd"

import { RightOutlined, HeartOutlined, LeftOutlined } from "@ant-design/icons"
import history from "../../utils/history"
import { saveState } from "../../utils/storageUtil"
import { PRODUCT_ID } from "../../utils/constants/appConfigs"

const Carousell = (props) => {
  const { allProductList, AddWishLists } = props
  console.log("allProductList", allProductList)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  }
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest
    return (
      <div className="carousel-button-group">
        <Tag
          className={currentSlide === 0 ? "carouseltag" : "carouseltag"}
          onClick={() => previous()}
        >
          <LeftOutlined />
        </Tag>
        <Tag onClick={() => next()} className="carouseltag">
          <RightOutlined />
        </Tag>
      </div>
    )
  }
  const handelRedirectDetail = (e, id) => {
    e.preventDefault()
    saveState(PRODUCT_ID, id)
    history.push("/app/cardetail")
  }
  const handelAddWishList = (e, id) => {
    history.push('/home')

    const product_id = {
      product_id: id,
    }
    AddWishLists(product_id)
  }
  return (
    <div className="carousel-wrapper myCarousel">
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
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={false}
        draggable={false}
        // ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        showDots={false}
      >
        {allProductList?.data?.map((item) => (
          <>
            <Card className="WeKnowYourChoices--cardheight carCard">
              <Row style={{ margin: "-40px 0 0px 0" }}>
                <Image
                  preview={false}
                  src={item?.product_thumbnail}
                  width={300}
                />
              </Row>
              <Row justify="space-between">
                <Col>
                  <h3 style={{ margin: "15px 0" }}>{item.product_name}</h3>
                  <h5>Rs. {item.price}</h5>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col>{parse(`${item.description.slice(0, 200)}`)}</Col>
              </Row>
              <Row className="buttom-content">
                <Button
                  className="common-button"
                  onClick={(e) => handelRedirectDetail(e, item.product_id)}
                >
                  Read More <RightOutlined />
                </Button>

                <Tag
                  className="tag-icon"
                  onClick={(e) => handelAddWishList(e, item.product_id)}
                >
                  <HeartOutlined style={{ color: "white", fontSize: "20px" }} />
                </Tag>
              </Row>
            </Card>
          </>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousell
