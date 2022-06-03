import { CloseCircleOutlined } from "@ant-design/icons"
import { Button, Form, Modal, Row, Col } from "antd"
import Title from "antd/lib/typography/Title"
import React, { useEffect, useState } from "react"
import { FOURWHILE_NEPAL } from "../../utils/constants/appConfigs"
import history from "../../utils/history"
import { loadState } from "../../utils/storageUtil"
import { Input, Notification } from "../Common/AntdComponents"

const BookCar = (props) => {

  const [btnLoading, setBtnLoading] = useState()
  const [isBook, setBooK] = useState(false)
  const data = loadState(FOURWHILE_NEPAL)?.data
  const [form] = Form.useForm()
  const handleCancel = () => {
    props.onBookcarVisiable(false)
  }
  const handelProceed = () => {
    form.validateFields().then((value) => {
      const Data = {
        customer_id: data?.id,
        product_id: props.productId,
        address: value.address,
      }
      if (data.access_token) {
        setBtnLoading(true)
        props.BookCarByparam(Data, setBtnLoading, setBooK)
      } else {
        history.push("/home")
        Notification("Error", "Please register first ", "error")
      }
    })
  }
  useEffect(() => {
    if (isBook) {
      props.onBookcarVisiable(false)
      props.MyBookCar()
      setBooK(false)
    }
  }, [isBook, props])
  return (
    <>
      <Modal
        visible={props.bookcarVisable}
        footer={null}
        onCancel={handleCancel}
        closeIcon={<CloseCircleOutlined />}
        width={600}
      >
        <Form layout="vertical" form={form}>
          <Row gutter={[6, 6]}>
            <Col span={24}>
              <Title className="download-title">Book This Car</Title>
            </Col>
            <Col span={12}>
              <Input
                label="Full Name"
                hideLabel
                name={"person_name"}
                required
                disabled
                initialValue={data?.name}
              />
            </Col>

            <Col span={12}>
              <Input
                label="Contact Number"
                hideLabel
                name={"contact"}
                required
                initialValue={data?.mobile_number}
                disabled
              />
            </Col>
            <Col span={12}>
              <Input label="Address " hideLabel name={"address"} required />
            </Col>

            <Col span={24}>
              <Button
                className="common-button"
                onClick={(e) => handelProceed(e)}
                form={form}
                loading={btnLoading}
              >
                Book This Car
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      {/*          
          {paymentMethodVisable &&(
            <PaymentMethod 
                paymentMethodVisable={paymentMethodVisable} 
                onPaymentVisiable={(e)=>setProceedPatment(e)} 
                onSetCar={(e)=>setCar(e)}
            />
        )} */}
    </>
  )
}
export default BookCar
