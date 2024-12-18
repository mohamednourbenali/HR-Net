import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/store.js';
import states from '../data/states';
import departments from '../data/departements';
import DatePicker from 'react-datepicker';
import Modal from '../components/Modal.js'
import Dropdown  from "my-dropdown-library"
import { format, parseISO, } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.module.css';

function CreateEmployee() {
  const dispatch = useDispatch();
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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleDateChange = (date, name) => {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    const formattedDate = format(parsedDate, 'MM/dd/yyyy');
    setFormData({ ...formData, [name]: formattedDate });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <h1 className="title">HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          label="Birth date"
          className="birth-date"
          selected={formData.dateOfBirth}
          onChange={(date) => handleDateChange(date, 'dateOfBirth')}
          dateFormat="MM/dd/yyyy"
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker 
          label="starting date"
          className="start-date"
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

          <Dropdown 
            label="State"  
            options={states.map(state => ({ label: state.label, value: state.value }))}
            value={formData.state} 
            onChange={(e) => setFormData({ ...formData, state: e.target.value })} 
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </fieldset>

        <Dropdown
          label="Department"
          options={departments.map(dept => ({ label: dept, value: dept }))}
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        />
        <br/>
        <button type="submit">Save</button>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default CreateEmployee;
