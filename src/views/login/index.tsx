import './style.less'
import React, { FC, useState } from 'react'
// import { useHistory } from 'react-router-dom'

import { Form, Input, Button } from 'antd'
import { AimOutlined } from '@ant-design/icons'

import { authApi } from '../../data/api'

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

const LoginForm: FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const changeFormData = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setFormData({
      ...formData,
      [type]: e.target.value,
    })
  }
  // const history = useHistory()
  const login = async () => {
    await authApi.login(formData)
    window.location.href = '/'
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

const Login: FC = () => (
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
