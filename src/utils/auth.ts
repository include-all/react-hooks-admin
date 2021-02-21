import store from '../store/index'
import { authApi } from '../data/api'
import loginIngoAction from '../store/action/loginInfo'

class Auth {
  private getLoginInfoPromise: Promise<any> | null

  constructor() {
    this.getLoginInfoPromise = null
    console.log('new auth')
  }

  getLoginInfo() {
    this.getLoginInfoPromise =
      this.getLoginInfoPromise ||
      authApi.getLoginInfo().then((data) => {
        store.dispatch(loginIngoAction.save(data))
        return true
      })
    // return this.getLoginInfoPromise
  }
}

export default new Auth()
