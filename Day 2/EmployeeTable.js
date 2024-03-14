import React from 'react';
import './EmployeeTable.css';
function EmployeeTable({employees}){
    return(
        <table class = "employee-table" >
            <thread>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>DeptNo</th>
            </tr>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.job}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.deptNo}</td>
                    </tr>
                ))}
            </tbody>
            </thread>
            
        </table>
    )
}

export default EmployeeTable;