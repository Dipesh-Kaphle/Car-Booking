import { RightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Image, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { PRODUCT_ID } from '../../utils/constants/appConfigs'
import history from '../../utils/history'
import { saveState } from '../../utils/storageUtil'

const BlogPosts =(props)=>{
    const {carDetailsList}=props
    const handelRedirectDetail=(e,id)=>{
       saveState(PRODUCT_ID,id)
        history.push("/app/cardetail")
      }
    return(
        <Row className='blog-content' >
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Row className='blog-post'>
                        <Title className='blog-posttitle'>
                        Blog Posts
                        </Title>
                        <Title className='blog-posttext'>
                        Find our Blog Posts
                        </Title>
                    </Row>
                   
                </Col>
            {carDetailsList?.map((item)=>(
                <Col xl={8} xxl={8} xs={24} sm={24} md={12}>
                    <Card 
                    cover={<Image src={item.product_thumbnail} preview={false} />}
                    >
                        <Row gutter={[8,8]}>
                            <Col span={24}>
                                <Title className='blog-name'>
                                   {item.product_name}
                                </Title>
                            </Col>
                            <Col>
                            {item.description?.slice(0,200)}
                            </Col>
                            <Col>
                              <Button className='common-button' onClick={(e)=>handelRedirectDetail(e,item.product_id)}>
                              Read More <RightOutlined/>
                              </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            ))}
          </Row>
        </Row>
    )
}
export default BlogPosts
