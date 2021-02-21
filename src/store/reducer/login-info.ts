import defaultState from '../state/login-info'

const loginInfo = (state = defaultState, action: { type: string; data: any }) => {
  switch (action.type) {
    case 'SAVE_LOGIN_INFO':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default loginInfo
