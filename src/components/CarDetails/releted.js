import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { Row, Col, Typography, Image, Card, Button, Tag } from "antd"
import logoicon from "../../assets/carouselLogo.svg"
import { RightOutlined, HeartOutlined, LeftOutlined } from "@ant-design/icons"

const Carousels = (props) => {
  const { carDetailsList } = props
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
  return (
    <div className="carousel-wrapper myCarousel">
      <Row className="carousel-title">
        <Col span={20}>
          <Typography.Text className="carouseltext">
            Related Cars
          </Typography.Text>
        </Col>
        <Col span={20}>
          <Typography.Text className="carousellatest">
            Cars similar to Suzuki Swift V2.0
          </Typography.Text>
        </Col>
      </Row>
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        showDots={false}
      >
        {carDetailsList?.map((item) => (
          <>
            <Card className="WeKnowYourChoices--cardheight carCard">
              <Row style={{ margin: "-40px 0 0px 0" }}>
                <Image
                  preview={false}
                  src={item.product_thumbnail}
                  width={300}
                />
              </Row>
              <Row justify="space-between">
                <Col>
                  <Typography.Text className="WeKnowYourChoices--position">
                    {item.product_name}
                  </Typography.Text>
                </Col>
                {/* <Col>
                <Typography.Text className="WeKnowYourChoices--position">
                    {item.jobCategory}
                  </Typography.Text>
                </Col> */}
              </Row>
              <Row gutter={[16, 16]}>
                <Col className="WeKnowYourChoices--positiondown" span={24}>
                  <Typography.Text className="WeKnowYourChoices--jobCAtegory">
                    {item.description.slice(0, 200)}
                  </Typography.Text>
                </Col>
              </Row>
              <Row className="buttom-content">
                <Button className="common-button">
                  Read More <RightOutlined />
                </Button>

                <Tag className="tag-icon">
                  <HeartOutlined style={{ color: "white", fontSize: "20px" }} />
                </Tag>
                <Tag className="tag-logo">
                  <Image
                    src={logoicon}
                    preview={false}
                    width={20}
                    style={{
                      margin: "0 0 -5px 0",
                    }}
                  />
                </Tag>
              </Row>
            </Card>
          </>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousels
