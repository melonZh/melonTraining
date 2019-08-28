
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin, Card, Input, Button, Checkbox, Icon, Tooltip } from 'antd';

import { doUserLogin } from 'Actions/user.js';

// style

import Style from './index.less'

// import LoginForm from '../Components/LoginForm';

const List = (props) => {
  // 使用 
  // useEffect(() => {
  //   const user = localStorage.getItem('user')
  //   const { history } = props
  //   console.log('user', user)
  //   if (!user) {
  //     history.push('/login')
  //     return
  //   }
  // })
  const doLogin = (value) => {
    const { doUserLogin } = props
    console.log('value', value, props)
    doUserLogin(value)
  }
  return (
    <div >
      我是首页
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

const ListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


export default ListPage