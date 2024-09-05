import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate()

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData={email,password}
    console.log(formData)
    try {
        const response = await axios.post('http://localhost:3000/auth/login', formData, {
          headers: {
            'Content-Type': 'application/json', // Ensure the backend expects JSON
          },
         
        });
        alert('Login Sucessfull')
        // Log the response data
        console.log('Response from server:', response.data);
      } catch (error) {
        // Handle errors, such as network issues or server errors
        console.error('Error occurred while submitting the form:', error);
        // Optionally, show an alert or message to the user
        alert(`Submission failed: ${error.message}`);
      }
  };
  return (
    <div className="first-container">
        <div className="right-half">
        <div className="right-half-content">
          <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      
      <div className="left-container">
       
      <form onSubmit={handleSubmit}>
        <h2 className="login-head">Loign</h2>
      
       <div>

        <label htmlFor="email">Email:</label>
        <br/>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="inputForm"
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <br/>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
            className="inputForm"
        />
        </div>
        <button type="submit" className="inputForm">Login</button>
        <br/>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>Don't Have Account? <Link to="/signup">Sign Up</Link></p> 
      </form>
    </div>
    </div>
  );
};

export default Login;