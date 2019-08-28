import { BASE_SYSTEM_URL } from 'Contants/Common.js'

export const proHost = 'http://rent.52elven.com/gateway' //生产环境

export const devHost = 'http://192.168.0.130:8001' //徐江

let host = ''
if (process.env.NODE_ENV !== 'production') {
  host = devHost
} else {
  host = proHost
}

export const BASE_API_URL = host + BASE_SYSTEM_URL

export const USER_API = {
  login: BASE_API_URL + '/login',
}