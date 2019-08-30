import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  Layout,
  Avatar,
  Dropdown,
  Menu,
  Button,
} from 'antd'


import {
  isNil,
  flow,
  prop,
} from 'lodash/fp'

import Style from "./Layout.less";

const {
  Header
} = Layout

const menuMappings = [{
  title: '退出登录',
  fucName: 'onLogout',
}]

const HeaderMenu = (
  <Menu>
    {
      menuMappings.map(({ title, fucName }, index) => (
        <Menu.Item key={index} onClick={fucName}>
          <Button type="link">{title}</Button>
        </Menu.Item>
      ))
    }
  </Menu>
)


const HeaderWrapper = props => {
  const user = localStorage.getItem('user')
  let userName = 'user'
  let menu = null
  if (!isNil(user)) {
    userName = flow(
      prop('user'),
      prop('userName')
    )(JSON.parse(localStorage.getItem('user')))
    menu = HeaderMenu
  }
  
 return (
  <Header className={Style.HeaderWrapper}>
    <div className={Style.UserLogo}>
      <Dropdown overlay={menu} >
        <Avatar size="large" style={{background: '#7265e6'}}>
          {userName}
        </Avatar>
      </Dropdown>
    </div>
  </Header>
 )
}





export default HeaderWrapper