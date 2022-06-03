import { RightOutlined } from "@ant-design/icons"
import { Row, Col, Button, Image } from "antd"
import Title from "antd/lib/typography/Title"
import suggest from "../../assets/suggest.svg"
import React, { useState } from "react"
import SuggestForm from "./suggestPopUp"
const Suggest = (props) => {
  const { SuggestCarByPrice } = props
  const [suggestVisiable, setSuggestVisiable] = useState(false)
  const handelSuggest = () => {
    setSuggestVisiable(true)
  }

  return (
    <Row className="suggest ">
      <Row gutter={[8, 8]} className="suggests-content">
        <Col span={14}>
          <Row justify="start" className="contentRow" gutter={[16, 8]}>
            <Col span={30}>
              <Title className="suggest-title">
                Confuse about choosing a car to buy?
              </Title>
            </Col>

            <Col span={24}>
              <Title className="suggest-text">
                We suggest you the best car under your budget
              </Title>
            </Col>
            <Col span={24}>
              <Button
                className="suggest-button"
                onClick={(e) => handelSuggest(e)}
              >
                Suggest me a car <RightOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Image src={suggest} className="suggestImage" preview={false} />
        </Col>
      </Row>
      {suggestVisiable && (
        <SuggestForm
          onSuggest={(e) => setSuggestVisiable(e)}
          suggestVisiable={suggestVisiable}
          SuggestCarByPrice={SuggestCarByPrice}
        />
      )}
    </Row>
  )
}
export default Suggest
