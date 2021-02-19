import 'antd/dist/antd.css'
import './app.less'
import React from 'react'

import WrapRoute from './router/index'

const App = () => (
  <div className="page">
    <WrapRoute />
  </div>
)

export default App
