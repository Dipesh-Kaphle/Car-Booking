import React, { useContext, useState } from "react"
import { Row, Col, Form, Button } from "antd"

import { Input, Password } from "../Common/AntdComponents"
import Title from "antd/lib/typography/Title"
import { AuthContext } from "../Context/AuthContext"
const Login = (props) => {
  const [form] = Form.useForm()
  const { handleLogin } = useContext(AuthContext)
  const [btnLoading, setBtnLoading] = useState(false)

  const handelRedirect = () => {
    props.onLogin(false)
    props.onRegister(true)
  }
  const handelSubmit = () => {
    form.validateFields().then((value) => {
      setBtnLoading(true)
      handleLogin(value, setBtnLoading)
    })
  }
  return (
    <Form layout="vertical" className="register-content" form={form}>
      <Row>
        <Col>
          <Title className="login-title">Login</Title>
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col span={24}></Col>
        <Col span={24}>
          <Input
            name={"mobile_number"}
            label={"Mobile number"}
            type="phone"
            maxLength={10}
            required
            hideLabel
            rules={[
              {
                min: 10,
                message: "Please enter 10 digit number",
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Password name={"password"} label={"Password"} required hideLabel />
        </Col>
        <Col span={15}>
          <Button
            className="common-button"
            form={form}
            onClick={handelSubmit}
            loading={btnLoading}
          >
            Log In
          </Button>
        </Col>

        <Col span={24}>
          <Title className="login-title" onClick={(e) => handelRedirect(e)}>
            Don’t have an account? Create New Account
          </Title>
        </Col>
      </Row>
    </Form>
  )
}
export default Login
