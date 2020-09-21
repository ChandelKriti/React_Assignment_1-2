import React from 'react';
import './App.css';
import Hello from './component/hello'
import EmployeeList from './component/employeeList';





function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
       <h2>Employee-List</h2> 
      <EmployeeList />  
    </div>
  )
}


export default App;
