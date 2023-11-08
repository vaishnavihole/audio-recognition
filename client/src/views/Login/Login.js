import React, { useState } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send data to a server or perform client-side validation.
    console.log(formData);
  };

  return (
    <>
    <Navbar />
    <div className="login-form">
      <h2 className='title'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
    <div>
        <Link className='navigate-link' to="/audioVideoRecognition">
        Start Chat</Link>
 </div>

    <Footer />
    </>
  );
};

export default LoginForm;
