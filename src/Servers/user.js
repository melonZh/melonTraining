import axios from 'axios'

import Api from 'Apis/Api.js'

import {
  _post
} from 'Utils/Request'


// 登录

export const _login = async ({ userId, password }) => {
  return await _post({
    url: Api.user.login,
    data: { userId, password },
    needToken: false,
  })

}