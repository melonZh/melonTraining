import Api from 'Apis/Api.js'

import {
  _post,
  _get,
  _put,
  _delete,
} from 'Utils/Request'

export const _getList =  async params => {
  return await _get({
    url: Api.student.list,
    params,
  })
}

export const _getById =  async (id) => {
  return await _get({
    url: Api.student.student,
    params: { id },
  })
}


export const _create =  async data => {
  return await _post({
    url: Api.student.student,
    data,
  })
}

export const _del =  async id => {
  return await _delete({
    url: Api.student.student,
    params: { id },
  })
}

export const _update = async data => {
  return await _put({
    url: Api.student.student,
    data,
  })
}