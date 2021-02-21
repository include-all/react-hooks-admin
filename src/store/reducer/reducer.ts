import { combineReducers } from 'redux'
import exp from './exp'
import loginInfo from './login-info'

const reducer = combineReducers({
  exp,
  loginInfo,
})

export default reducer
