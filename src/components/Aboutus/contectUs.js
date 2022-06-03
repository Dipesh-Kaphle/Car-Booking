import { Col ,Row} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { Input } from '../Common/AntdComponents'

const ContactUs=()=>{
    return(
        <Row className='contactus'>
            <Row gutter={[16,8]}>
                <Col span={24}>
                    <Title className='contact-title'>
                    Contact Us
                    </Title>
                </Col>
                <Col span={24}>
                    <Title className='contact-text'>
                    Let’s bring joy and delight to the process of car buying together.
                    </Title>
                </Col>
                <Col span={12}>
                    <Input 
                        label="Customer support :Paramdumotors@gmail.com"
                        hideLabel
                        disabled
                    />
                </Col>
                <Col span={12}>
                    <Input 
                        label="Customer support :Paramdumotors@gmail.com"
                        hideLabel
                        disabled
                    />
                </Col>
                <Col span={12}>
                    <Input 
                        label="Address :Narayan Chaur, Naxal"
                        hideLabel
                        disabled
                    />
                </Col>
                <Col span={12}>
                    <Input 
                        label="Address :Narayan Chaur, Naxal"
                        hideLabel
                        disabled
                    />
                </Col>
            </Row>
        </Row>
    )
}
export default ContactUs