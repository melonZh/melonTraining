
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  Layout
} from 'antd'


import {
  prop,
  flow,
  find,
  first,
  isEmpty,
} from 'lodash/fp'
// style

import Style from './index.less'

// 头部
import HeaderWrapper from '../Components/Header'

// 侧边栏

import SliderWrapper from '../Components/Slider'

// 内容

import ContentWrapper from '../Components/Content'

// 尾部

import FooterWrapper from '../Components/Footer'





const Dashboard = (props) => {
 
  const { history, location } = props

 
  
  // 使用 
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      history.push('/login')
      return
    }
  })

 
  return (
    <Layout style={{ height: '100vh' }}>
      <SliderWrapper
        location={location}
      />
      <Layout>
        <HeaderWrapper />
        <ContentWrapper />
        <FooterWrapper />
      </Layout>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  
}

const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)


export default DashboardPage