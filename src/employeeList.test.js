import MaterialTable from 'material-table';
import React from 'react';
import EmployeeList from './component/employeeList';

test ('EmployeeList Component is present or not', () => {
    expect(<EmployeeList/>).toBeDefined()
});

test ('MaterialTable Component is present or not', () => {
    expect(<MaterialTable/>).toBeDefined()
});

test ('employeeTable is null or not', () => {
    expect(EmployeeList).not.toBeNull()
});