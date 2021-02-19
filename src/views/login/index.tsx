import './style.less'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Input, Button, message } from 'antd'
import { AimOutlined } from '@ant-design/icons'

import axios from 'axios'

const FormItem = Form.Item

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const changeFormData = (e: any, type: string) => {
    setFormData({
      ...formData,
      [type]: e.target.value,
    })
  }
  const history = useHistory()
  const login = () => {
    axios
      .post('/api/auth/login', formData)
      .then(({ data }) => {
        if (!data.errCode) {
          history.push('/')
        } else {
          message.error(data.errMsg)
        }
        return null
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <Form {...layout}>
      <FormItem label="username" name="username">
        <Input value={formData.username} onChange={(e) => changeFormData(e, 'username')} />
      </FormItem>
      <FormItem label="password" name="password">
        <Input.Password value={formData.password} onChange={(e) => changeFormData(e, 'password')} />
      </FormItem>
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={login}>
          Login
        </Button>
      </FormItem>
    </Form>
  )
}

const Login = () => (
  <div className="login">
    <div className="form">
      <div className="title">
        <AimOutlined twoToneColor="#eb2f96" />
        Mysterious Entrance
      </div>
      <LoginForm />
    </div>
  </div>
)

export default Login
