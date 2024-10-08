import React, { useState } from "react";

import Axios from "axios";
import {  useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/forgot-password", {
        email,
      }).then(response => {
          if(response.data.message === 'check your email') {
            alert("check you email for reset password link")
              navigate('/login')
          }
          
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
        <h2 ClassName="login-head">Forgot Password</h2>
        

        <label htmlFor="email">Email:</label>
        <br/>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="inputForm"
        />
      <div>
        <button type="submit" className="inputForm">Send</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default ForgotPassword