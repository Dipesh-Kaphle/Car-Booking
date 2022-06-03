import { Col, Row } from "antd"
import Title from "antd/lib/typography/Title"
import React from "react"
import { Link,} from "react-router-dom"
import FooterMenu from "../../../utils/constants/footerMenu"
// import { Input } from "../../Common/AntdComponents"

const FooterCar = () => {
  return (
    <Row justify="" className="firstfooter-content" style={{justifyContent : 'space-between'}}>
     
        
          {FooterMenu.map((data) => (
            <Col xl={6} xxl={6} md={8} sm={12} xs={12} key={data.id}>
              <Row className="footerlogo">
                {data.image}{" "}
                <Title className="footer-title">{data.menu_name} </Title>
              </Row>
              <Row>
                <Title className="footer-discription">{data.discription}</Title>
              </Row>
              <Row>
                {/* {data.id === 4 && (
                  <Row gutter={8}>
                    <Col span={12}>
                      <Input label="Enter Your Email " hideLabel />
                    </Col>
                    <Col span={12}>
                      <Button className="common-button">
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                )} */}
              </Row>
              <Row>
                {data?.item.map((item) => (
                  <Col span={24} key={item.id}>
                    <Link to={item.link}>
                      <Title className="footer-item">{item.name}</Title>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
       
    </Row>
  )
}

export default FooterCar
