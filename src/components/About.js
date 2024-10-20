import React from 'react';
import brainImage from '../brainimage.jpeg'; // Make sure the image path is correct

const About = () => {
  return (
    <div className="about-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', color: '#282c34' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', borderBottom: '5px solid #007BFF', display: 'inline-block', paddingBottom: '5px' }}>ABOUT US</h2>
        <p style={{ marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Comprehensive web-based software solution addressing the challenges in brain tumor detection.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          We are developing a web-based solution utilizing deep learning to detect brain tumors.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Our platform analyzes MRI images to determine the presence of tumors and generates detailed reports.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Our goal is to provide a reliable, efficient, and accessible tool for early diagnosis and improved patient outcomes.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Our system ensures accurate, timely diagnoses, aiding healthcare professionals globally.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={brainImage} alt="Brain MRI scan" style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
      </div>
    </div>
  );
};

export default About;

