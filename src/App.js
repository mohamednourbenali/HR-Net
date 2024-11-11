import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
