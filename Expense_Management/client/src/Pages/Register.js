import React from 'react'
import {Form,Input} from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div>
        <h1>Login/Register</h1>
        <Form layout='vertical'>
            <Form.Item label="Name" name="name">
                <Input/>
            </Form.Item>
            <Form.Item label="E-mail" name="email">
                <Input type='email' required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type='password' required/>
            </Form.Item>
            <div>
                <Link to={'/login'}>Already a user</Link>
                <button>Register</button>
            </div>
            
        </Form>
    </div>
    </>
  )
}

export default Register