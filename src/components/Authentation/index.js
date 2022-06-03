import React from 'react';
import {Modal} from 'antd'
import { CloseCircleOutlined} from '@ant-design/icons';
import Login from './login';
import Register from './register';
import { isAuthenticated } from '../../utils/authUtil';

const AuthModal=(props)=>{
    const handleCancel = () => {
        props.onModalVisiable(false);
      };
   
    return(
        !isAuthenticated() && (
        <Modal  
            visible={props.modalVisiable} 
            onCancel={handleCancel}
            closeIcon={<CloseCircleOutlined />}
            footer={null}
        
        >
         {props.loginVisiable && !isAuthenticated() &&(
             <Login 
                loginVisiable={props.loginVisiable} 
                onLogin={props.onLogin} 
                onRegister={props.onRegister}
            />
         )}
         {props.registerVisiable && !isAuthenticated() && (
             <Register 
                registerVisiable={props.registerVisiable} 
                onRegister={props.onRegister}
                onLogin={props.onLogin}
            />
         )}
        </Modal>
    )
    )
}
export default AuthModal