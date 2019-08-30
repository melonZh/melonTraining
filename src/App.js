import React from 'react';




import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import Mock from 'Mock/index'; // 引入mock模块

if (process.env.NODE_ENV !== 'production') {
  Mock.start(); //并且执行初始化函数
}



import Login from 'Pages/Login/Containers/index'
import Dashboard from 'Pages/Dashboard/Containers/index'


// 引入 reducer
import RootReducer from './Redux/RootReducers'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk, createLogger, promiseMiddleware)));


class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"/"} component={Dashboard} />
            <Redirect to={"/"} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
