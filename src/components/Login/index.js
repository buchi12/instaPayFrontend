import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Loign</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>Don't Have Account? <Link to="/signup">Sign Up</Link></p> 
      </form>
    </div>
  );
};

export default Login;