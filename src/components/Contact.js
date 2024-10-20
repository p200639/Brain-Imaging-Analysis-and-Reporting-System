import React, { useState } from 'react';
import brainImage from '../brainimage.jpeg'; // Make sure the image path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
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
    // You can handle the form submission here, e.g., send the data to an API
    alert(`Message submitted by ${formData.firstName} ${formData.lastName}`);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" style={{ padding: '20px', color: '#000' }}>
      <h1 style={{ fontSize: '2.5rem', borderBottom: '5px solid #00f', display: 'inline-block' }}>Contact us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your question or message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />
            <button type="submit" style={submitStyle}>Submit</button>
          </form>
        </div>
        <div style={{ flex: 1 }}>
          <img src={brainImage} alt="Brain MRI" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  height: '150px',
};

const submitStyle = {
  padding: '10px 20px',
  fontSize: '1.1rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;

