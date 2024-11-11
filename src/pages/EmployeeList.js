import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, []);


    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true }
    ];

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={employees}
                tableId="employee"
                sortId="startDate"
                striped
            />
            <Link to="/"> Home </Link>
        </div>
    );
}

export default EmployeeList;
