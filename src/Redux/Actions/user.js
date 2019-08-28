import {createAction} from 'redux-actions'

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from 'ActionTypes/user.js'

import {
  _login,
} from 'Servers/user.js'

// actions creator 
export const _LoginAction = createAction(USER_LOGIN_REQUEST)

export const _LoginSuccessAction = createAction(USER_LOGIN_SUCCESS)

export const _LoginFailAction = createAction(USER_LOGIN_FAILURE)

// 异步actions

export const doUserLogin = ({ userId, password }) => {
  console.log('userId', userId, 'password', password)
  return dispatch => {
    // 派发登录的action
    dispatch(_LoginAction())
    _login({ userId, password })
    .then(res => {
      console.log('res', res.data)
      if(res.data.success){
        const userInfo = res.data.content
        localStorage.setItem('user', JSON.stringify(userInfo))
        dispatch(_LoginSuccessAction(userInfo))
      } else {
        dispatch(_LoginFailAction(res.data.message))
      }
      return Promise.resolve(res)
    })
    .catch(error => {
      dispatch(_LoginFailAction(error))
      return Promise.reject(error)
    })
  }
}