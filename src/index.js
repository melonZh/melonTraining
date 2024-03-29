import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// 全局中文
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'


ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <App/>
  </LocaleProvider>
  , document.getElementById('root'));
