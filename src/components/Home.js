import React, { useState } from 'react';
import axios from 'axios';
import exampleMRI from '../brainimage.jpeg'; // Ensure the path is correct

const Home = () => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(exampleMRI); // Default to the home image
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.includes('image')) {
      setFile(selectedFile);
      setImageURL(URL.createObjectURL(selectedFile)); // Create a URL for the uploaded image
      setError(''); // Clear previous errors on new valid file selection
    } else {
      setFile(null);
      setImageURL(exampleMRI); // Reset to home image for invalid file
      setError('Please upload a valid MRI scan image.'); // Show error for invalid file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload a file before submitting.');
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5001/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.prediction);
      setError(''); // Clear any error messages on success
    } catch (error) {
      console.error('Error during prediction:', error);
      setError('Error during prediction. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadReport = async () => {
    try {
      const response = await axios.get('http://localhost:5001/download-report', {
        responseType: 'blob', // Important for handling binary data
      });

      // Create a link element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'prediction_report.pdf'); // Specify the file name
      document.body.appendChild(link);
      link.click(); // Trigger the download
      link.remove(); // Clean up
    } catch (error) {
      console.error('Error downloading the report:', error);
      alert('Error downloading the report. Please try again.');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div>
          <div className="upload-box">
            <p style={{ color: 'white' }}>Upload your MRI Scans Here</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="file"
              accept="image/*" // Ensure only images are selectable
              onChange={handleFileChange}
              style={{ marginBottom: '10px' }}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {error && (
            <p style={{ color: 'red', marginTop: '10px' }}>{error}</p> // Show error message if any
          )}
        </div>
        <img src={imageURL} alt="Uploaded MRI" style={{ width: '50%' }} /> {/* Display the uploaded image */}
      </div>
      {prediction && (
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>
          <h3>Prediction: {prediction}</h3>
          <button onClick={handleDownloadReport} style={{ marginTop: '10px' }}>
            Download Report
          </button> {/* Button to download report */}
        </div>
      )}
    </div>
  );
};

export default Home;

