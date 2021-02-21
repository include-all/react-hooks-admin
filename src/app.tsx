import 'antd/dist/antd.css'
import './app.less'
import React, { useEffect } from 'react'

import WrapRoute from './router/index'

import auth from './utils/auth'

if (!['/login'].includes(window.location.pathname)) {
  auth.getLoginInfo()
}

const App = () => (
  <div className="page">
    <WrapRoute />
  </div>
)

export default App
