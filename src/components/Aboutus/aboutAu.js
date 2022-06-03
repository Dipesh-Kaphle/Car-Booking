import { Col ,Row} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'

const AboutUs=()=>{
    return(
        <Row className='aboutus'>
            <Row gutter={[16,8]}>
                <Col span={24}>
                    <Title className='about-title'>
                        About Us
                    </Title>
                </Col>
                <Col span={24}>
                    <Title className='about-text'>
                    Our mission is to bring delight in car buying, we offer a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.
                    </Title>
                </Col>
                <Col span={24}>
                    <Row className='aboutus-image'>
                        
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}
export default AboutUs