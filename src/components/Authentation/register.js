import React,{useState,useContext} from 'react';
import {Row,Col,Form,Button} from 'antd'
import {Input,Password} from '../Common/AntdComponents'
import Title from 'antd/lib/typography/Title';
import { AuthContext } from "../Context/AuthContext"

const Register=(props)=>{
  const [form] = Form.useForm()
  const { handleSignUp } = useContext(AuthContext)
  const [btnLoading, setBtnLoading] = useState(false)

    const handelRedirect=()=>{
        props.onRegister(false);
        props.onLogin(true)

    }
    const handelSubmit = () => {
        form.validateFields().then((value) => {
            setBtnLoading(true)
            handleSignUp(value,setBtnLoading)
        })
    }
    return(
      
        <Form layout="vertical"  className='register-content' form={form}>
        <Row>
            <Col>
                <Title className='signup-title'>
                    Signup
                </Title>
            </Col>
        </Row>
        <Row gutter={[16,8]}>
            <Col span={12}>
                <Input 
                    label="Full Name" 
                    hideLabel 
                    required
                    name="name"
                />
            </Col>
            <Col span={12}>
        
                <Input 
                    label="Email" 
                    hideLabel 
                    required 
                    type="email"
                    name="email"
                />
            </Col>
            <Col span={12}>
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
            <Col span={12}>
            <Password
                name="password"
                label="Password"
                hideLabel
                required
                validator
            />
            </Col>
            <Col span={12}>
            <Password
                label="Confirm Password"
                name="password_confirmation"
                hideLabel
                required
                rules={[
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                        return Promise.resolve()
                    }
                    return Promise.reject(new Error("Password must be same "))
                    },
                }),
                ]}
            />
            </Col>
            <Col span={24}>
                <Button 
                    className='common-button'  
                    onClick={handelSubmit}
                    form={form}
                    loading={btnLoading}
                >
                Sign up
                </Button>
            </Col>
            <Col span={24}>
                <Title className='signup-title' onClick={()=>handelRedirect()}>
                    Already have an account? Login Now
                </Title>
            </Col>

        </Row>
        </Form>
    )
}
export default Register