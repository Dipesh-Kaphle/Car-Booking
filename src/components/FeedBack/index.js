import { Button, Col, Form, Row } from 'antd'
import React, { useState } from 'react'
import { Input } from '../Common/AntdComponents'

const SendFeedBck=(props)=>{
    const {sendFeedBackormData}=props
    // console.log('props',props)
    const [btnLoading,setBtnLoading]=useState(false)
    const [form] = Form.useForm()
    const handelSubmit=()=>{
        form.validateFields().then((value)=>{
            setBtnLoading(true)
            sendFeedBackormData(value,setBtnLoading)

        })
    }
    return(
        <Form layout='vertical'  form={form}>
        <Row style={{marginTop:'60px', marginBottom: '60px'}}>
            <div className='container'>
                <h3 className='title'>Send Feedback to Paramdu Motors</h3>
{/* name
address
email
phoneno
message */}
            <Col span={12}>
             <Input name="name" label="name"/>
            </Col>
            <Col span={12}>
             <Input name="address" label="address"/>
            </Col>
            <Col span={12}>
             <Input name="email" type="email" label="email"/>
            </Col>
            <Col span={12}>
             <Input name="phoneno" type="number" label="phone number"/>
            </Col>
            <Col span={12}>
             <Input name="message" type="text" label="message"/>
            </Col>
            
            <Col>
              <Button form={form} onClick={handelSubmit} loading={btnLoading}>
                  Save
              </Button>
            </Col>
            </div>

        </Row>
        </Form>

    )
}
export default SendFeedBck
