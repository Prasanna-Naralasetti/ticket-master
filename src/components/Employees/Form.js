import React from 'react'
//import { addCustomer} from '../../actions/customers'
import {connect} from 'react-redux'
//import { findCustomers } from '../../selectors/findCustomers'
import { startAddEmployee } from  '../../actions/employees'
import { startGetEmployee } from '../../actions/employees'
//import {withRouter} from 'react-router-dom'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:'',
           department:''
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
            id:Number(new Date()),
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department:this.state.department
        }
       //console.log(formData)
       const redirect=()=>this.props.history.push('/employees')
       this.props.dispatch(startAddEmployee(formData,redirect))

         
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
                    <input name='mobile' id='mobile' type='text' value={this.state.mobile} onChange={this.handleChange} />
                    </label><br />
                     <label>department
                   <select name="department" id="department" onChange={this.handleChange}>
                       <option>select</option>
                       {
                           this.props.department.map(ele=>{
                               return(<option key={ele._id} value={ele._id}>{ele.name}</option>)
                           })
                       }
                   </select>
                    </label><br/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}
 const mapStateToProps=(state)=>{
  // console.log('form',props)
   //const id=props.match.params.id
    return{
        department:state.departments
    }
 }
export default connect(mapStateToProps)(EmployeeForm)