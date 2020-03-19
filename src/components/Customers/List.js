import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetCustomers} from '../../actions/customers'


function CustomerList(props){
    if(props.customers.length==0){
        props.dispatch(startSetCustomers())
    }
    return(
        <div>
            <h1>Listing Customers - {props.customers.length}</h1>
           <ul>
               {
                   props.customers.map((ele,id)=>{
                       return (
                           <li key={id}><Link to ={ `/customers/${ele._id}`}>{ele.name}</Link></li>
                       )
                   })
               }
           </ul>
            <Link to="/customer/new">AddCustomer</Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        customers:state.customers
    }
}
export default connect(mapStateToProps)(CustomerList)