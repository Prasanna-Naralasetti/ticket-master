import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveEmployee, startSetEmployees} from '../../actions/employees'
//import EmployeeForm from './Form'

function EmployeesList(props){
     if(props.employee.length==0){
         props.dispatch(startSetEmployees())
     }
    const handleRemove = (id) => {
       const confirmRemove=window.confirm('are you sure')
       if(confirmRemove){
           props.dispatch(startRemoveEmployee(id))
       }
    }
    return(
      
        <div>
           
            <h1>Employees List-{props.employee.length}</h1>
            <table border="2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Departments</th>
                        <th>Action</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employee.map((ele,id)=>{
                          
                        return(<tr key={id}>
                            <td>{ele._id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.mobile}</td>
                            
                            <td>{(props.departments.find(ele => ele._id == ele._id).name)}</td> 
                            
                            <td><button><Link to={`/employees/${ele._id}`}>show</Link></button></td>
                            <td><button onClick={()=>{
                                handleRemove(ele._id)}} >remove</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <br/>
            <Link to="/employees/new">Add Employee</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        employee:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(EmployeesList)