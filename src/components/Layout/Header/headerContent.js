import { Row,Col, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import history from '../../../utils/history';

const HeaderContent=()=>{
    const handelFindCar=()=>{
        history.push('/short/latest')
    }
    const handelAboutUs=()=>{
        history.push('/app/aboutus')

    }
    return(
            <Row className='headercontent' >
            <Row> 
                <Col xxl={12} xl={12} md={14} sm={24} xs={24}>
                    <Row>
                    <Col span={24}>
                        <Title className='header-title'>
                        Find Suzuki Cars
                            with Fourwheel Nepal
                        </Title>
                    </Col>
                    <Col span={24}>
                        <Title className='header-text'>
                        We are a platform for searching cars and book your dream car.
                        </Title>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[16,8]}>
                            <Col>
                            <Button className='common-button' onClick={(e)=>handelFindCar(e)}>
                            Find Cars <RightOutlined style={{fontSize:'15px'}}/>
                            </Button>
                            </Col>
                            <Col>
                            <Button className='commenlyuse-button' onClick={(e)=>handelAboutUs(e)}>
                            About Us
                            </Button>
                            </Col>
                            
                        </Row>
                    </Col>
                    </Row>
                </Col>
                <Col xxl={12} xl={12} md={14} sm={24} xs={24}>
                    <Row>
                        <iframe 
                        width="100%" 
                        src="https://www.youtube.com/embed/_3RtnnETIuY" 
                        // title="YouTube video player"
                        allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        title="Paramod Motor"
                        
                        style={{zIndex:0,height:"300px" }}
                        >
                        </iframe>
                    </Row>
                   
                </Col>
            </Row>
            
            
      
            
            </Row>
        
    )
}
export default HeaderContent