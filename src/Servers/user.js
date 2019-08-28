import axios from 'axios'

import { USER_API } from 'Apis/Api.js'

// 登录

export const _login = async ({ userId, password }) => {
  return await axios.post( USER_API.login, { userId, password })
  
}