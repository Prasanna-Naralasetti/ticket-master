import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import { startEditCustomers } from '../../actions/customers'


 function CustomerEdit(props){
     const handleSubmit=(formData)=>{
         const id=props.match.params.id
         const redirect=()=>props.history.push('/customers')
        props.dispatch(startEditCustomers(formData,id,redirect))
     }
     return(
         <div>
            <h1>Edit Customer</h1>
            <CustomerForm handleSubmit={handleSubmit}/>
         </div>
    )
 }
 export default connect()(CustomerEdit)