import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function EmployeeShow(props){
    const{_id,name,email,mobile}=props.employee || {}
    return(
        <div>
            <Link to={`/employees/edit/${_id}`} >Edit</Link>
           {props.employee?(    
               <div>
                   <h1>Employee Number-{_id}</h1>
                    <p>Name:{name}</p>
                    <p>Email:{email}</p>
                    <p>Mobile:{mobile}</p>
               </div>
           ):(
               <div>
                   <h1>Loading...</h1>
               </div>
           )}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        employee:state.employees.find(ele=>ele._id==id)
    }
}
export default connect(mapStateToProps)(EmployeeShow)