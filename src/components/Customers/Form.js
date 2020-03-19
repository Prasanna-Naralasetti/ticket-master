import React from 'react'
//import { addCustomer} from '../../actions/customers'
import {connect} from 'react-redux'
import { findCustomers } from '../../selectors/findCustomers'
//import { startAddCustomer } from  '../../actions/customers'
import {withRouter} from 'react-router-dom'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.customer?props.customer.name:'',
            email: props.customer ? props.customer.email :'',
            mobile: props.customer ? props.customer.mobile :''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
       //console.log(formData)

        
        this.props.handleSubmit((formData))
    }
    render() {
        return (
            <div >
                
                <form onSubmit={this.handleSubmit}>
                    <label>name
                    <input name='name' id='name' type='text' value={this.state.name} onChange={this.handleChange} />
                    </label><br />
                    <label>email
                    <input name='email' id='email' type='text' value={this.state.email} onChange={this.handleChange} />
                    </label><br />
                    <label>mobile
                    <input name='mobile' id='mobile' type='mobile' value={this.state.mobile} onChange={this.handleChange} />
                    </label><br />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    //console.log('form',props)
    const id=props.match.params.id
    return{
        customer:findCustomers(state.customers,id)
    }
}
export default withRouter(connect(mapStateToProps)(CustomerForm))