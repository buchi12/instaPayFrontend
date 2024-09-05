import React, { useState } from "react";

import Axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
import './Reset.css'

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const {token} = useParams()
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`http://localhost:3000/auth/reset-password/${token}`, {
        password,
      }).then(response => {
          navigate('/login')
          console.log(response.data)
      }).catch(err => {
          console.log(err)
      })
    };
  return (
    <div className="first-container">
  
     <div className="right-half">
        <div className="right-half-content">
          <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="left-container">

         <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="login-head">Reset Password</h2>
        
        <label htmlFor="password">New Password:</label>
        <br/>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          className="inputForm"
        />
      <div>
           <button type="submit" className="inputForm">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ResetPassword