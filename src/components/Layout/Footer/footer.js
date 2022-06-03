import { Col, Row } from "antd"
import Title from "antd/lib/typography/Title"
import React from "react"
import FooterItem from "../../../utils/constants/footerItem"
import history from "../../../utils/history"
import {Link} from 'react-router-dom'

const FooterBottom = () => {
  const handelRedirect=(e,id)=>{
    e.preventDefault()
    if(id===5){
    history.push("/short/terms/conditions")

    }else if(id ===6){
    history.push("/short/faq")

    }
  }
  return (
    <Row justify="center" className="firstsecond-content">
      <Col span={24}>
        <Row gutter={[8, 8]}>
          {FooterItem.map((data) => (
            <Col span={8}>
              <Title className="firstfooter-title">{data.discription}</Title>
              <Row gutter={[12, 8]}>
                {data.item.map((item) => (
                  <Col>
                    <Link  to={item.link}>
                      <Title className="firstfooter-text" onClick={(e)=>handelRedirect(e,item.id)}>
                      {item.nameitem} {item.name}
                      </Title>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default FooterBottom
