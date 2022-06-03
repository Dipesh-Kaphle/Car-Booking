import { Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { Collapse } from 'antd';
import { Layout } from 'antd';
import parse from 'html-react-parser'

function callback(key) {
    console.log(key);
  }
const { Panel } = Collapse;


const Faq=(props)=>{
    const {faqlist}=props
    console.log('faqlist',faqlist)
    return(
        <Row style={{marginTop:'60px', marginBottom: '60px'}}>
            <Col className='' style={{width: "80%", margin: '0 auto'}}>
            <Title>
            Faq
            </Title>
            <Collapse onChange={callback} style={{width: "100%"}}>
                {faqlist?.data?.map((item)=> (

                
    <Panel header={item.title} key={item.title} >
    <p>
  {parse(`${item.description}`)}
      
    </p>
    </Panel>
    ))}
   
  </Collapse>


            </Col>
        </Row>
    )
}
export default Faq
