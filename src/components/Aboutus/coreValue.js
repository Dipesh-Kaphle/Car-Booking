import { Card, Col ,Image,Row, Space} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import coreImage from '../../assets/respect.svg'
const CoreValue=()=>{
    return(
        <Row className='core'>
            <Row >
                <Col span={24}>
                    <Title className='core-title'>
                      Our Core Values
                    </Title>
                </Col>
                <Col span={24}>
                    <Row gutter={[16,8]}>
                        {
                            corevalue.map((item)=>(
                            <Col span={12}>
                                <Card>
                                    <Space direction='horizontal'>
                                    {item.image}
                                    <div className='core-text'>
                                        <Title className='core-name'>
                                        {item.name}

                                        </Title>
                                        <Title className='description'>
                                        {item.description}
                                        </Title>
                                        
                                    </div>
                                    </Space>
                                </Card>
                            </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}
export default CoreValue
const corevalue=[
    {
        id:1,
        name:'Respect',
        image:<Image src={coreImage} preview={false}/>,
        description:'We respect our colleagues, customers and partners'
    },
    {
        id:2,
        name:'Respect',
        image:<Image src={coreImage} preview={false}/>,
        description:'We respect our colleagues, customers and partners'
    },
    {
        id:3,
        name:'Respect',
        image:<Image src={coreImage} preview={false}/>,
        description:'We respect our colleagues, customers and partners'
    },
    {
        id:4,
        name:'Respect',
        image:<Image src={coreImage} preview={false}/>,
        description:'We respect our colleagues, customers and partners'
    },
]