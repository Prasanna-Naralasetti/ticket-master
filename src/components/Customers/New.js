import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import { startAddCustomer } from '../../actions/customers'


function CustomerNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startAddCustomer(formData,redirect))
    }
    return(
        <div>
            <h1>Add Customer</h1>
            <CustomerForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(CustomerNew)