import React from 'react';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import WebCam from '../../component/WebCam/WebCam';
import './AudioVideoRecognition.css';

function AudioVideoRecognition() {
  return (
    <div className='audio-video-recognition-container'>
      <Navbar />

      <div className='main-container'>
        <div className='left-content'>
          <WebCam />
        </div>

        <div className='right-content'>
          <h1 className='title'>Speech to Text</h1>
          <div className='image-container'>
            <img src='/path-to-your-image' alt='Your Image' />
          </div>

          <p className='description'>Text</p>
          <p className='long-description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AudioVideoRecognition;
