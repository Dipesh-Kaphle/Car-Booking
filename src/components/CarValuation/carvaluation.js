import { Button, Card, Col, Divider, Form, Image, Row } from "antd"
import Title from "antd/lib/typography/Title"
import carvavaluation from "../../assets/carvavaluation.svg"
import React, { useState } from "react"
import { DatePicker, Input, Select } from "../Common/AntdComponents"
import { loadState } from "../../utils/storageUtil"
import { PRODUCT_LIST } from "../../utils/constants/appConfigs"
// import history from '../../utils/history'
const CarValuation = (props) => {
  const [form] = Form.useForm()
  const [btnLoading, setBtnLoading] = useState(false)
  const { carValuationByPram } = props
  const handelValidate = () => {
    form.validateFields().then((value) => {
      setBtnLoading(true)
      carValuationByPram(value, setBtnLoading)
    })
  }
  const data = loadState(PRODUCT_LIST)
  console.log("data", data)
  return (
    <Row className="carvaluation-content">
      <Col span={24}>
        <Card className="valuation-card">
          <Row>
            <Col xxl={10} xl={10} md={10} xs={24} sm={24}>
              <Row>
                <Col span={24}></Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Image src={carvavaluation} preview={false} width={500} />
                </Col>
              </Row>
            </Col>
            <Col xxl={14} xl={14} md={14} xs={24} sm={24}>
              <div className="title">
                <h3 className="text">Valuate your car</h3>
                <p className="text">
                  Please provide us your car details to get car valuation
                </p>
              </div>
              <Form layout="vertical" form={form}>
                <Row justify="start" gutter={[8, 8]}>
                  <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                    <Input
                      label="Person Name"
                      hideLabel
                      name={"person_name"}
                      required
                    />
                  </Col>
                  <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                    <Input
                      label="Mobile"
                      hideLabel
                      name={"person_mobile"}
                      required
                    />
                  </Col>
                  <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                    {/* <Input 
                                             
                                            hideLabel 
                                            name={"name"}
                                            required

                                        /> */}
                    <Select
                      label="Car Name"
                      hideLabel
                      array={data.map((item) => item)}
                      name={"model"}
                      description={"product_name"}
                      value={"product_id"}
                      required
                    />
                  </Col>
                  <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                    <Input label="Kilometers" hideLabel name={"kms"} required />
                  </Col>
                  <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                    <Select
                      placeholder="Make Year"
                      hideLabel
                      name={"make_year"}
                      required
                      array={valutation.map((item) => item)}
                      description={"date"}
                      value={"date"}
                    />
                  </Col>
                  <Col xxl={8} xl={8} md={8} xs={24} sm={24}>
                    <Button
                      className="common-button"
                      onClick={(e) => handelValidate(e)}
                      form={form}
                      loading={btnLoading}
                      style={{ width: "100%" }}
                    >
                      Valuate Car
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Row justify="center" gutter={[16, 8]} className="contain">
          <Col span={24}>
            <Title className="valuation-title">
              Things that may affect the value of your car
            </Title>
          </Col>
          <Col span={24}>
            <Title className="valuation-text">
              Together with our partners Cartell, we use data from thousands of
              Carzone's live and historic stock to calculate the estmt market
              value of a car. Carzone car valuations are recommended for
              guidance purposes only. We use details such as the year and
              mileage to work out the approximate market value, however there
              are many other factors that may impact the car’s value including
              the following.
            </Title>
          </Col>
        </Row>
        <Row justify="center" gutter={[32, 32]} className="content-valuation">
          {valutation
            .filter((item) => item.id <= "5")
            .map((item) => (
              <Col xxl={8} xl={8} md={8} xs={24} sm={24}>
                <Row key={item.id} justify="center">
                  <Col span={24}>
                    <Title className="valuation-name">{item.name}</Title>
                  </Col>
                  <Col span={24}>
                    <Title className="valuation-dise">{item.description}</Title>
                  </Col>
                </Row>
              </Col>
            ))}
          <Divider />
        </Row>
      </Col>
    </Row>
  )
}
export default CarValuation
const valutation = [
  {
    id: 1,
    date: "2010",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 2,
    date: "2011",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 3,
    date: "2012",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 4,
    date: "2013",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 5,
    date: "2014",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 6,
    date: "2015",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 7,
    date: "2016",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 8,
    date: "2017",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 9,
    date: "2018",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 10,
    date: "2019",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 11,
    date: "2020",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 12,
    date: "2021",
    name: "Car condition",

    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
  {
    id: 13,
    date: "2022",
    name: "Car condition",
    description:
      "The prices we provide are based on the car being in good condition, with minimal wear and tear. If a car has no damage and has been well maintained, it will be worth more than a car with scratches, dents or damage.",
  },
]
