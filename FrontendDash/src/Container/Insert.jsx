// Insert.js
import { useState } from 'react';
import axios from 'axios';
import './Insert.css';

const Insert = () => {
  const [formData, setFormData] = useState({
    departmentNumber: '',
    departmentName: '',
    departmentScore: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://backendtechno-ptyr.onrender.com/api/aadDepartments', formData);
      console.log(response.data); 
      alert("added");
    } catch (error) {
      console.error('Error adding department:', error.message);
    }
  };

  return (
    <div className="insert-container">
      <form className="insert-form" onSubmit={handleSubmit}>
        <label htmlFor="departmentNumber">Department Number:</label>
        <input
          type="text"
          id="departmentNumber"
          name="departmentNumber"
          value={formData.departmentNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="departmentName">Department Name:</label>
        <input
          type="text"
          id="departmentName"
          name="departmentName"
          value={formData.departmentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="departmentScore">Department Score:</label>
        <input
          type="text"
          id="departmentScore"
          name="departmentScore"
          value={formData.departmentScore}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default Insert;
