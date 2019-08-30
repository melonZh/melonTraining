

import { actionTypeCreator, createAction } from 'Utils/redux-actions'



const actionType = actionTypeCreator(__filename);

export const LOGIN =  actionType(BASE_SYSTEM_URL + '/LOGIN')

export const LOGOUT = actionType(BASE_SYSTEM_URL + '/LOGOUT')


// actions creator 
export const _LoginAction = createAction(LOGIN, ({ userId, password }) => _login({ userId, password }))

export const _Logout = createAction(LOGOUT)

