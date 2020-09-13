import React from 'react';
import MaterialTable from 'material-table'


const EmployeeList = () => {
    const data = [{
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspiring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
    const columns = [{
      title: 'Employee Name',
      field: 'name'
    },
    {
      title: 'Employee Job',
      field: 'job'
    }]
    return (
        <div>
            <MaterialTable title="Employee Data" 
             data={data}
             columns={columns}
             options ={{
                 search: false,
                  paging: false
             }}
            />
        </div>
    )
}

export default EmployeeList;