
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Spin, Card, Input, Button, Checkbox, Icon, Tooltip } from 'antd';

import { doUserLogin } from 'Actions/user.js';

// style

import Style from './index.less'

import LoginForm from '../Components/LoginForm';

const Login = (props) => {
  const doLogin = (value) => {
    const { doUserLogin } = props
    doUserLogin(value).then(
      (res) => {
        console.log('我是res', res)
      } 
    )
  }


  return (
    <div className={Style.login}>
      <Spin tip="登陆中..." spinning={false}>
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
  doUserLogin
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default LoginPage