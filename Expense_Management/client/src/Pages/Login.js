import React, { useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Component/Layout/Loading";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("users/login", values);
      message.success("Login Successfully");
      localStorage.setItem("user", JSON.stringify({ ...data }));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
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
        {loading && <Loading />}
        <h1>Login/Register</h1>
        <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item label="E-mail" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div>
            <Link to={"/register"}>Not a user? click to register</Link>
            <button>Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
