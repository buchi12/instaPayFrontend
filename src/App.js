import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/forgotpassword" exact element={<ForgotPassword />} />
      <Route path="/resetpassword/:token" exact element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
