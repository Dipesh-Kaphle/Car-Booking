import { Col, Form, Row, Modal, Button, Image } from "antd"
import React, { useState } from "react"
import { CloseCircleOutlined } from "@ant-design/icons"
import Title from "antd/lib/typography/Title"
import suggestpopup from "../../assets/suggestpopup.svg"

const SuggestForm = (props) => {
  const { SuggestCarByPrice } = props
  const [select, setSelect] = useState(0)
  const [price, setPrice] = useState()
  const [btnLoading, setLoadButton] = useState(false)

  const handleCancel = () => {
    props.onSuggest(false)
  }
  const handelSelect = (e, item) => {
    setSelect(item.id)
    setPrice({ min_price: item.min_price, max_price: item.max_price })
  }
  const handelNext = () => {
    //
    setLoadButton(true)
    SuggestCarByPrice(price, setLoadButton)
  }
  return (
    <Modal
      visible={props.suggestVisiable}
      onCancel={handleCancel}
      closeIcon={<CloseCircleOutlined />}
      footer={null}
    >
      <Form>
        <Row gutter={[8, 16]} justify="center">
          <Col>
            <Title className="suggestpopup-title">Car Recommender</Title>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Image src={suggestpopup} preview={false} width={80} />
            </Row>
          </Col>
          <Col>
            <Title className="suggestpopup-title">My dream car budget</Title>
          </Col>
          {suggest.map((item) => (
            <Col>
              <Row
                onClick={(e) => handelSelect(e, item)}
                className={item.id === select ? "select" : "not-select"}
              >
                {item.name}
              </Row>
            </Col>
          ))}

          <Col span={24}>
            <Row justify="center">
              <Button
                className="common-button"
                onClick={(e) => handelNext(e)}
                loading={btnLoading}
              >
                Next
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}
export default SuggestForm
const suggest = [
  {
    id: 1,
    name: "25 Lakh - 50 Lakh",
    min_price: "2500000",
    max_price: "5000000",
  },
  {
    id: 2,
    name: "50 Lakh - 60 Lakh",
    min_price: "5000000",
    max_price: "6000000",
  },
  {
    id: 3,
    min_price: "6000000",
    max_price: "7000000",
    name: "60 Lakh - 70 Lakh",
  },
  {
    id: 4,
    name: "80 Lakh - 90 Lakh",
    min_price: "8000000",
    max_price: "9000000",
  },
  {
    id: 5,
    name: "90 Lakh - 125 Lakh",
    min_price: "9000000",
    max_price: "12500000",
  },
]
