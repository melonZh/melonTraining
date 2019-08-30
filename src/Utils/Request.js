import axios from 'axios'

import {
  prop
} from 'lodash/fp'

import { message } from 'antd'

// 引入 history
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

let token = undefined

export const CommonAxios = ({
  method="get",
  url,
  data={},
  params={},
  options={},
  needToken=true,
}) => {
  // 设置 token
  if (!token && localStorage.getItem('user')) {
    token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
  }
  const finalOptions = {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...needToken ? {Authorization: token} : {},
      ...prop('headers')(options),
    }
  }

  return axios({
    ...finalOptions,
    url,
    method,
    data,
    params,
  }).then(res => {
    if (res.data.code === 11) {
      setToken(undefined)
      localStorage.removeItem('user')
      message.error('登陆超时,请重新登陆！')
      history.push('/login')
      history.go()
    }
    return res
  })
  .catch(e => {
    console.log('e', e)
    message.error('服务器出现问题，请联系管理员！Error:' + e)
    return new Promise(function(resolve, reject) {
      reject({ data: '' })
    })
  })

}

export function setToken(newToken) {
  token = newToken
}

export const _get = ({
  url,
  params={},
  data={}, 
  options={},
}) => CommonAxios({
  method: 'get',
  url,
  params,
  data,
  options,
})

export const _post = ({
  url,
  params={},
  data={}, 
  options={},
}) => CommonAxios({
  method: 'post',
  url,
  params,
  data,
  options,
})

export const _put = ({
  url,
  params={},
  data={}, 
  options={},
}) => CommonAxios({
  method: 'put',
  url,
  params,
  data,
  options,
})

export const _patch = ({
  url,
  params={},
  data={}, 
  options={},
}) => CommonAxios({
  method: 'patch',
  url,
  params,
  data,
  options,
})

export const _delete = ({
  url,
  params={},
  data={}, 
  options={},
}) => CommonAxios({
  method: 'delete',
  url,
  params,
  data,
  options,
})

