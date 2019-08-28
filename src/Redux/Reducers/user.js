import { handleActions } from 'redux-actions';


import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from 'ActionTypes/user.js'

const initialState = {
  islogedIn: false,
  userInfo: null,
  errorMessage: null,
}



const user = handleActions({
  [USER_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    userInfo: action.payload,
    islogedIn: true,
  }),
  [USER_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    userInfo: null,
    errorMessage: action.payload,
  }),
}, initialState)

export default user