import React from 'react'
import {connect} from 'react-redux'

import { startSetDepartments, startRemoveDepartment} from '../../actions/departments'
import DepartmentForm from './Form'


function DepartmentList(props){
    if (props.department.length==0){
        props.dispatch(startSetDepartments())
    }
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('Ae u sure')
        if(confirmRemove){
            props.dispatch(startRemoveDepartment(id))
        }
    }
    return(
        <div>
            <h1>Departments List-{props.department.length}</h1>
            <ul>
              {
                  props.department.map(ele=>{
                      return(
                          <li key={ele._id}>{ele.name} 
                          <button onClick={()=>{
                              handleRemove(ele._id)
                          }}>remove</button>
                          </li>
                     
                      ) 
                  })
              }
            </ul>
            <DepartmentForm />
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        department:state.departments
    }
}
export default connect(mapStateToProps)(DepartmentList)