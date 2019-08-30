import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  Layout,
  Typography,
} from 'antd'

import {
 
  Route,
  Switch,
 
  
} from "react-router-dom";

import Style from "./Layout.less";

import ListPage from "Pages/List/Containers/index";


const {
  Content
} = Layout
const { Title } = Typography


const Home = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '15rem' }}>
        <Title>欢迎使用！！！</Title>
      </div>
    </div>
  )
}

const ContentWrapper = props => {
  
 return (
  <Content>
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/student/list"} exact component={ListPage} />
    </Switch>
  </Content>
 )
}






export default ContentWrapper