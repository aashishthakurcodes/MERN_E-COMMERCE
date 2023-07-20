import React, { useEffect, useState } from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Component/Layout/Loading'

const Register = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const submitHandler=async (values)=>{
      try {
        setLoading(true);
        await axios.post("/users/register", values);
        message.success("Registeration Successfull");
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setLoading(false);
        message.error("something went wrong"+error.message);
      }
    };

    useEffect(() => {
      if (localStorage.getItem("user")) {
        navigate("/");
      }
    }, [navigate]);
  return (
    <>
    <div>
        {loading && <Loading/>}
        <h1>Login/Register</h1>
        <Form layout='vertical' onFinish={submitHandler}>
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