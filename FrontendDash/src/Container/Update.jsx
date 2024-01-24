// Update.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Update.css';

const Update = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backendtechno-ptyr.onrender.com/api/departments');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error.message);
      }
    };

    fetchData();
  }, [departments]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://backendtechno-ptyr.onrender.com/api/updateDepartments/${selectedDepartment._id}`, {
        departmentName: selectedDepartment.departmentName,
        departmentScore: selectedDepartment.departmentScore,
      });
      console.log(response.data);
      alert('Department updated successfully');
    } catch (error) {
      console.error('Error updating department:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://backendtechno-ptyr.onrender.com/api/deleteDepartments/${id}`);
      console.log(response.data);
      alert('Department deleted successfully');
    } catch (error) {
      console.error('Error deleting department:', error.message);
    }
  };

  return (
    <div className="update-container">
      <table className="department-table">
        <thead>
          <tr>
            <th>Department Number</th>
            <th>Department Name</th>
            <th>Department Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department._id}>
              <td>{department.departmentNumber}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentScore}</td>
              <td>
                <button onClick={() => setSelectedDepartment(department)}>Update</button>
                <button onClick={() => handleDelete(department._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>  
      </table>

      {selectedDepartment && (
        <div className="update-form">
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
            <label htmlFor="updatedDepartmentNumber">Updated Department Number:</label>
            <input
              type="text"
              id="updatedDepartmentNumber"
              name="updatedDepartmentNumber"
              value={selectedDepartment.departmentNumber}
              readOnly
            />

            <label htmlFor="updatedDepartmentName">Updated Department Name:</label>
            <input
              type="text"
              id="updatedDepartmentName"
              name="updatedDepartmentName"
              value={selectedDepartment.departmentName}
              onChange={(e) => setSelectedDepartment({ ...selectedDepartment, departmentName: e.target.value })}
              required
            />

            <label htmlFor="updatedDepartmentScore">Updated Department Score:</label>
            <input
              type="text"
              id="updatedDepartmentScore"
              name="updatedDepartmentScore"
              value={selectedDepartment.departmentScore}
              onChange={(e) => setSelectedDepartment({ ...selectedDepartment, departmentScore: e.target.value })}
              required
            />

            <button type="submit">Update Department</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Update;
