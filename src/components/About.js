import React from 'react';
import '../style/App.css'
import myProfile from '../assets/img/profile.jpg';
import FadeInSection from '../FadeInSections'
import { Button } from '@material-ui/core';

function About() {

  return  (
    <div className="container" id="about">
      <FadeInSection>
      <div className="about-section">
        <div className="content">
          <h1>About Me</h1>
          <p>Welcome!👋 My name is Yuji. I am a self-motivated developer currently pursuing a bachelor's degree in computer science at Brigham Young University - Hawaii (Expected graduation 2021 December). My experience working in a various industries has helped me not only in becoming a software/web developer but also an effective leader, communicator, and marketer. Whenever I build, I strive to analyze it from a user's perspective and deliver a high-quality experience.</p>
          <p>Specialties: software development, mobile & web applications development, RESTful API development, data analysis, data visualization, and machine learning.</p>
          <p>If I am not coding, you can find me hiking, surfing, traveling, playing the guitar, taking photographs, or hanging out with my wife.</p>
          <a href="https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/Yuji+Sato+Resume.pdf" target="_blank" rel="noreferrer"><Button variant="outlined">CV 2021</Button></a>
        </div>
        <div className="image-wrapper">
          <img src={myProfile} alt="myProfile" />
        </div>
      </div>
      </FadeInSection>
    </div>
  );
}

export default About;