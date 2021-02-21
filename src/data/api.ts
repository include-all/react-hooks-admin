import axios from '../utils/http'

const genPostReq = (url: string) => (...params: any) => axios.post(url, ...params)
const genGetReq = (url: string) => (...params: any) => axios.get(url, ...params)

const authApi = {
  login: genPostReq('/auth/login'),
  getLoginInfo: genGetReq('/auth/testLogin'),
}

export { authApi }
