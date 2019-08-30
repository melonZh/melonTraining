import { handleActions } from 'Utils/redux-actions';


import {
  LOGIN,
  LOGOUT,
} from 'Actions/user.js'

const initialState = {
  islogedIn: false,
  userInfo: null,
  errorMessage: null,
}



const user = handleActions({
  [LOGIN]: (state, action) => {
    const { payload: { data={}, request={} } } = action
    
    return state
  },
  [LOGOUT]: (state, action) => (initialState),
}, initialState)

export default user