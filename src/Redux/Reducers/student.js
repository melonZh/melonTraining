import { handleActions } from 'Utils/redux-actions';

import {
  _READ_ALL,
  _READ_ONE,
  _CREATE,
  _UPDATE,
  _DELETE,
} from 'Actions/student'

const students = handleActions({
  [_READ_ALL]: (state, {payload: { data={} }}) => {
    return {
      ...state,
      list: data.content
    }
  },
  [_READ_ONE]: (state, action) => {

  },
  [_CREATE]: (state, action) => {

  },
  [_UPDATE]: (state, action) => {

  },
  [_DELETE]: (state, action) => {

  },
}, {
  list: [],
  current: {},

})

export default students