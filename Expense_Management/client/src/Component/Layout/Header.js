import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <div>
        <h1>Hedaer sectioon</h1>
        <div>
        <li className="nav-item">
                {" "}
                <p className="nav-link">{loginUser && loginUser.name}</p>{" "}
              </li></div>

              <div>
                <button onClick={logoutHandler}>LogOut</button>
              </div>
    
    </div>
  )
}

export default Header