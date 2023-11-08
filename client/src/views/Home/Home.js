import React from 'react';
import './Home.css'; // Import your CSS file
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1 className='homepage-title'>Welcome to Audio Recognition</h1>
        <div className="feature-list">
          <div className="feature-card">
            <h2>Speech-to-Text</h2>
            <p>Convert spoken words to text.</p>
          </div>
          <div className="feature-card">
            <h2>Music Identification</h2>
            <p>Identify music tracks.</p>
          </div>
          <div className="feature-card">
            <h2>Voice Commands</h2>
            <p>Execute actions via voice.</p>
          </div>
          <div className="feature-card">
            <h2>Speaker Identification</h2>
            <p>Recognize speakers.</p>
          </div>
          <div className="feature-card">
            <h2>Language Detection</h2>
            <p>Identify spoken language.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
