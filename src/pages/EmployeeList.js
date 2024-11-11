import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import SubHeaderComponent from '../components/SubHeaderComponent';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

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

    const filteredItems = employees.filter(employee =>
        Object.values(employee)
            .join(' ')
            .toLowerCase()
            .includes(filterText.toLowerCase())
    );

    const subHeaderComponentMemo = useMemo(() => {    
        return (
          <SubHeaderComponent
            filterText={filterText}
            onFilter={e => setFilterText(e.target.value)}
          />
        );
      }, [filterText, resetPaginationToggle]);

    return (
        <div className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={filteredItems}
                tableId="employee"
                sortId="startDate"
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
            />
            <Link to="/"> Home </Link>
        </div>
    );
}

export default EmployeeList;
