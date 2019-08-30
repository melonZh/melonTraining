
import React, { useState } from 'react';
import { connect } from 'react-redux';

import CryptoJS from "crypto-js";




import {
  Spin,
  Card,
  message,
} from 'antd';

import { _login } from 'Servers/user.js';



// style

import Style from './index.less'

import LoginForm from '../Components/LoginForm';



const Login = (props) => {
  // 声明一个叫 "isLogining" 的 state 变量
  const [isLogining, setIsLogining] = useState(false);

  const doLogin = (value) => {
    
    // MD5 加密
    value['password']=CryptoJS.MD5(value['password']).toString().toUpperCase()
    setIsLogining(true)
    _login(value)
      .then(
        ({ data }) => {
          setIsLogining(false)
          if (data.success) {
            const userInfo = data.content
            // 设置 用户信息
            localStorage.setItem('user', JSON.stringify(userInfo))
            message.success('登陆成功')
            setTimeout(() => {
              props.history.push('/')
            }, 1000)
          } else {
            message.error('登陆失败,失败原因是账户或密码不正确')
          }
        } 
      )
      .catch(err => {
        setIsLogining(false)
      })
  }

  

  return (
    <div className={Style.login}>
      <Spin tip="登陆中..." spinning={isLogining}>
        <Card
          bordered={false}
          style={{ width: 400 }}
        >
          <LoginForm
            onSubmit = {doLogin}
          />
        </Card>
      </Spin>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default LoginPage