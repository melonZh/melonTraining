import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import { 
  Layout,
  Menu,
  Icon,
} from 'antd'

import {
  prop,
  flow,
  find,
  first,
  isEmpty,
} from 'lodash/fp'


import Style from "./Layout.less";


const {
  Sider
} = Layout

const { SubMenu } = Menu;

const menu = [{
  link: '/',
  title: '首页',
  icon: 'user',
}, {
  link: '/student',
  title: '学生管理',
  icon: 'user',
  children: [{
    link: '/student/list',
    title: '学生列表',
    icon: 'user',
  }, {
    link: '/student/info',
    title: '学生情况',
    icon: 'user',
  }]
},
{
  link: '/teacher',
  title: '老师管理',
  icon: 'user',
}
]

const getDefaultMenuKeys = pathname => {
  let openKeys = []
  let selectedKeys = []
  let targetMenu = {}
  const matchMenu = menu.find(({ link }) => pathname.match(link))
  targetMenu = isEmpty(matchMenu) ? menu[0] : matchMenu
  if (targetMenu.children) {
    openKeys = [targetMenu.link]
    const subMenuOpenKey = flow(
      prop('children'),
      find(({ link }) => pathname.match(link)),
      prop('link'),
    )(targetMenu)
    selectedKeys = subMenuOpenKey ? [subMenuOpenKey] : [flow(
      prop('children'),
      first,
      prop('link'),
    )(targetMenu)]
  } else {
    selectedKeys = [targetMenu.link]
    openKeys = []
  }
  return {
    openKeys,
    selectedKeys,
  }
}



const SiderWrapper = props => {
  const { location } = props
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  useEffect(() => {
    if (isEmpty(defaultSelectedKeys)) {
      const {
        selectedKeys,
        openKeys,
      } = getDefaultMenuKeys(location.pathname)
      setDefaultOpenKeys(openKeys)
      setDefaultSelectedKeys(selectedKeys)
    }
  })
  
 
 return (
  <Sider>
    <div className={Style.Logo} />
    {
      !isEmpty(defaultSelectedKeys) &&
      <Menu
      breakpoint="lg"
      theme="dark"
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {
        menu.map(({ link, icon, title, children=[] }) => {
          if (children.length) {
            return (
              <SubMenu
                key={link}
                title={
                  <span>
                    <Icon type={icon} />
                    <span>{title}</span>
                    
                  </span>
                }
              >
                {
                  children.map(({ link: subLink, icon: subIcon, title: subTuitle}) => (
                    <Menu.Item key={subLink}>
                    <Link to={subLink}><Icon type={subIcon}/>{subTuitle}</Link>
                  </Menu.Item>
                  ))
                }
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={link}>
                <Link to={link}><Icon type={icon}/>{title}</Link>
              </Menu.Item>
            )
          }
        })
      }
    </Menu>
    }
  </Sider>
 )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  
}

SiderWrapper.prototype = {
  location: PropTypes.object.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderWrapper)