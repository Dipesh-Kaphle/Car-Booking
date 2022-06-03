import { Button, Card, Col, Row, Tag, Image } from "antd"
import React from "react"
import logoicon from "../../assets/carouselLogo.svg"
import { RightOutlined, HeartOutlined } from "@ant-design/icons"
import Title from "antd/lib/typography/Title"
import { loadState } from "../../utils/storageUtil"
import { SUGGEST } from "../../utils/constants/appConfigs"
// import { parse } from "uuid"
import parse from 'html-react-parser'
const Suggest = () => {
  const suggestItems = loadState(SUGGEST)
  console.log(suggestItems.data.length);
  return (
    <Row className="suggest-content">
      {suggestItems.data.length==0? <div className="noDataFound">No Car found{'\n'}
      <p className="rangeDetails">Please choose other range</p></div>:<Row gutter={[16, 16]}>
        
        {suggestItems?.data?.map((item) => (
          <Col span={24}>
             <Card>
             
              <Row className="suggest-card">
                <Col span={12}>
                  <Image src={item?.product_thumbnail} alt="fourwhile" />
                </Col>
                <Col span={12} style={{padding: "30px"}}>
                  <Row>
                    <Col span={24}>
                      <Title className="suggest-name">
                        {item?.product_name}
                      </Title>
                    </Col>
                    <Col>
                      <Title className="suggest-price">
                        Rs : {item?.price}
                      </Title>
                    </Col>
                    <Col span={24}>
                      <div >


                     

{
  parse(item?.description.slice(0, 150))
}
</div>
                    </Col>
                    <Col span={24}>
                      <Row className="suggestbuttom-content">
                        <Button className="common-button">
                          Read More <RightOutlined />
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>}
    </Row>
  )
}
export default Suggest
