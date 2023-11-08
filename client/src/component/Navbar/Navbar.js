import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">Audio Recognitation🎙️</a>
          <ul className="nav-links ">
            <li><a href="/signup">Signup</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
