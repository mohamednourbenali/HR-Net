import React, { useState } from 'react';
import { Link } from "react-router-dom";
import states from '../data/states';
import departments from '../data/departements';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.module.css'

function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(formData);
    localStorage.setItem('employees', JSON.stringify(employees));
    alert('Employee Created!');
  };

  const handleDateChange = (date, name) => {
    const formattedDate = format(date, 'MM/dd/yyyy');
    setFormData({ ...formData, [name]: formattedDate });
  };

  return (
    <div className="container">
      <h1 className="title">HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSaveEmployee} id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker 
            selected={formData.dateOfBirth}
            onChange={(date) => handleDateChange(date, 'dateOfBirth')}
            dateFormat="MM/dd/yyyy"
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker 
            selected={formData.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            dateFormat="MM/dd/yyyy"
        />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />

          <label htmlFor="state">State</label>
          <select id="state" name="state" value={formData.state} onChange={handleChange}>
            {states.map((state) => (
                <option key={state.value} value={state.value}>
                    {state.label}
                </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" name="department" value={formData.department} onChange={handleChange}>
        {departments.map((dept, index) => (
            <option key={index} value={dept}>
                {dept}
            </option>
        ))}
        </select>
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
