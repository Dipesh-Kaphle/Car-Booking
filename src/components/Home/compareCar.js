import { Row,Col, Button,Form,Card} from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { useState } from 'react'
import { Select} from '../Common/AntdComponents'
const CompareCars=(props)=>{
  const [form] = Form.useForm()
  const [btnLoading,setBtnLoading]=useState(false)
 const {CompareByIdList,allProductList}=props
 
    const handelCompare=()=>{
        form.validateFields().then((values)=>{
         const product_id=[
            values.first_car,
            values.second_car
         ]
         console.log("values",product_id)
         setBtnLoading(true)
         CompareByIdList(product_id,setBtnLoading)
        })
    }
    return(
        <Row  className='compare-carscmponent'>
            <Col className='compare' span={24}>
                    <Title className='copmare-title'>
                      Compare Cars
                    </Title>
                    <Title className='compare-text'>
                      Please Select Cars to Compare based on their specification.
                    </Title>
            </Col>
            <Col span={24}>
                <Card className='compare-card'>
                    <Form layout="vertical" form={form}>
                    <Row gutter={[8,8]} className="comapre-cars">
                        <Col span={10}>
                            <Select 
                                label="Select Car 1" 
                                name={"first_car"}
                                hideLabel 
                                array={allProductList?.data?.map((item)=>item)} 
                                value={"product_id"}
                                description={"product_name"}  
                                required
                            />
                        </Col>
                        <Col span={10}>
                           <Select 
                                label="Select Car 2" 
                                hideLabel 
                                name={"second_car"}
                                array={allProductList?.data?.map((item)=>item)} 
                                value={"product_id"}
                                description={"product_name"}  
                                required
                            />

                        </Col>
                        <Col span={4}>
                            <Button 
                                className='common-button' 
                                form={form} 
                                onClick={(e)=>handelCompare(e)}
                                loading={btnLoading}
                            >
                            Compare
                            </Button>
                        </Col>
                    </Row>
                    </Form>
                </Card>
            </Col>

        </Row>
       
    )
}
export default CompareCars;
