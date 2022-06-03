import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Modal,Row} from 'antd'
import React from 'react'
import axios from "axios"

import { Input } from '../Common/AntdComponents';
 const PaymentMethod =(props)=>{
  const [form] = Form.useForm()
  const handelSubmit=()=>{
    const value={
      txAmt:'9000',
      amt:'30000',
      psc:'10',
      pdc:'0',
      scd:'estmerchant',
      pid:'1222',
      su:'http://merchantsite.com/success,html?q=su',
      fu:'http://merchantsite.com/failure.html?q=fu'
    }
      axios
      .post(
        "https://esewa.com.np/epay/transrec" ,
        value
      )
      .then((res) => {
        
      })
      .catch((err) => {
      
  
      })

    
   

  }
     return(
         <Modal  
          visible={props.paymentMethodVisable}
          footer={null}
          maskClosable={false}
          // onCancel={handleCancel}
                closeIcon={<CloseCircleOutlined />}
                width={600}
         >
        <Row>
          <Col span={24}>
          <Form form={form}>
            
            <Input name={"txAmt"} initialValue="9999" hidden/>
            <Input name={"amt"} initialValue="9999" hidden/>

            <Input  name={"psc"} initialValue="9999" hidden/>
            <Input name={"pdc"} initialValue="9999" hidden/>
            <Input name={"scd"} initialValue="testmerchant" hidden/>
            <Input  name={"pid"} initialValue="121234" hidden/>
            <Input   name={"su"}initialValue="http://merchantsite.com/success,html?q=su" hidden/>
            <Input  name={"fu"} initialValue="http://merchantsite.com/failure.html?q=fu" hidden/>
            <Button form={form} onClick={(e)=>handelSubmit()}>
              Submit
            </Button>
        </Form>
          </Col>
        </Row> 
        


                 
             
         
         </Modal>
     )
 }
 export default PaymentMethod;