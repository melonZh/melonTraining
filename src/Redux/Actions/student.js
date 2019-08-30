import { actionTypeCreator, createAction } from 'Utils/redux-actions'

import {
  READ_ALL,
  READ_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from 'ActionTypes/Common'

import {
  _getList,
  _getById,
  _create,
  _del,
  _update,
} from 'Servers/student'

const actionType = actionTypeCreator(__filename)

export const _READ_ALL = actionType(READ_ALL)

export const _READ_ONE = actionType(READ_ONE)

export const _CREATE = actionType(CREATE)

export const _UPDATE = actionType(UPDATE)

export const _DELETE = actionType(DELETE)


export const _ReadALL = createAction(
  _READ_ALL,
  data => _getList(data),
)

export const _ReadOne = createAction(
  _READ_ONE,
  id => _getById(id),
)

export const _Create = createAction(
  _CREATE,
  id => _create(id),
)

export const _Update = createAction(
  _UPDATE,
  id => _delete(id),
)

export const _Delete = createAction(
  _DELETE,
  id => _delete(id),
)